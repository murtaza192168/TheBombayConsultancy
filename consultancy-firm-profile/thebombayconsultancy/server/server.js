const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Add nodemailer here

// Serve images from the "service" folder


// Import the Service Model from (models directory)
const Service = require('./models/Service');

// Create an Express server
const app = express();
app.use(bodyParser.json());

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8080;
app.use(cors(
   //{origin: 'http://localhost:5173'}
   {origin: 'https://the-bombay-consultancy.vercel.app'}
     
    ));
    app.use(express.json());




// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://murtazashabbir:HHf80v4odrkyPfLn@clustertbc.vzjol.mongodb.net/TheBombayConsultancy?retryWrites=true&w=majority&appName=ClusterTBC', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Failed to connect to MongoDB database', err.message));

// ********************************************************************** //
// Define a Schema for each services card



// ********************************************************************** //


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
      // Send an acknowledgement email TO THE APPLICANT
      const applicantMailOptions = {
        from: process.env.EMAIL, // Sender address
        to: req.body.email, // Applicant's email
        subject: 'Application Received - The Bombay Consultancy',
        text: `Greetings from The Bombay Consultancy,\n\nThank you, ${req.body.name}, for applying. We have received your application and will review it shortly. We will contact you if we need further details.\n\nBest Regards,\nThe Bombay Consultancy Team
      `};
      // Send an email to the FIRM OWNER
      const ownerMailOptions = {
        from: process.env.EMAIL, // sender address
        to: 'murtazacloudwork1252@gmail.com', // owner's email
        subject: 'New Job Application Received',
        text: `A new job application has been submitted.\n\nApplicant Details:\nName: ${req.body.name}\nEmail: ${req.body.email}\nCover Letter:\n${req.body.coverLetter}\n\nPlease review the application in the system.`
      }

      // SEND EMAILS IN PARALLEL: Using Promise.all([])
      const sendEmails = Promise.all([ // instead of writing .then & .catch for every single Object, we use Promise.all([all call here those objects ref here]), wrap that in a variable (sendEmails) and then sendEmails.then.catch....
        transporter.sendMail(applicantMailOptions),
        transporter.sendMail(ownerMailOptions),
      ]);
      sendEmails.then((results) => {
        console.log('Email sent:', results);
        res.status(201).json({message: 'Application submitted successfully and emails sent.' })
      }).catch((emailError) => {
        console.error('Error sending emails', emailError);
        res.status(500).json({message: 'Application submitted but email sending failed.'})
      })

      
    } 
    catch (error) {
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
