const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Add nodemailer here


// Import the Service Model from (models directory)
const Service = require('./models/Service');

// Create an Express server
const app = express();
app.use(bodyParser.json());

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8080;
app.use(cors(
    //    {origin: 'https://the-bombay-consultancy.vercel.app'}
    {origin: 'http://localhost:5173'}
    ));
    app.use(express.json());




// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://murtazashabbir:HHf80v4odrkyPfLn@clustertbc.vzjol.mongodb.net/TheBombayConsultancy?retryWrites=true&w=majority&appName=ClusterTBC', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Failed to connect to MongoDB database', err.message));


// Define a schema
const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    coverLetter: String
  });
  
  // Create a model
  const Application = mongoose.model('Application', applicationSchema);
//*********************************************************** */
  //Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use the correct email service like Gmail, Outlook, etc.
    auth: {
      user: process.env.EMAIL, // Your email from .env
      pass: process.env.EMAIL_PASSWORD // Your email password from .env
    }
  });
  //********************************************************************* */

  // Handle POST request
  app.post('/api/careers', async (req, res) => {
    try {
      const newApplication = new Application({
        name: req.body.name,
        email: req.body.email,
        coverLetter: req.body.coverLetter
      });
  
      // Save the application to the database
      await newApplication.save();
//***************************************************************** */
      // Send an acknowledgement email
      const mailOptions = {
        from: process.env.EMAIL, // Sender address
        to: req.body.email, // Applicant's email
        subject: 'Application Received - The Bombay Consultancy',
        text: `Greetings from The Bombay Consultancy,\n\nThank you, ${req.body.name}, for applying. We have received your application and will review it shortly. We will contact you if we need further details.\n\nBest Regards,\nThe Bombay Consultancy Team`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ message: 'Application submitted but email failed to send.' });
        }
        console.log('Email sent: ' + info.response);
        res.status(201).json({ message: 'Application submitted successfully and email sent.' });
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      res.status(500).json({ message: 'Error submitting application' });
    }
  });

//*********************************************************************** */

    

// Define an API endpoint to get the services
app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find();
        console.log('Services found', services);
        res.json(services);
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
});



// Define a default route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome CA Consultancy Website backend');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
