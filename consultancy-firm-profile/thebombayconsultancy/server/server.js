const express = require('express');  //Web framework for Node.js.
const dotenv = require('dotenv');
const mongoose = require('mongoose');  //MongoDB object modeling tool.
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
// //Import your API routes
// const careerApplicationRoutes = require('./routes/careerApplicationRoutes');  




//Import the Service Model from (models directory)
const Service = require('./models/Service');
// Import the Career Model from models directory
const CareerApplications = require('./models/CareerApplications')

// CREATE AN EXPRESS SERVER
const app = express();
dotenv.config({path:'./config.env'})
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded


// mongodb code: CONNECT TO MongoDB Database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>console.log('Connected to MongoDB successfully'))
.catch(err => console.error('Failed to connect to MongoDB database', err.message));
 

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, 'uploads/'); // Directory to store uploaded resumes
    },
    filename: (_req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
    },
  });
  
  const upload = multer({ storage });
  

// Create a Nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  // Function to send email
  const sendEmail = async (to, subject, text) => {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to, // list of receivers
        subject, // Subject line
        text // plain text body
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };




//Define an API endpoint to get the services 
// GET METHOD - HTTP Request

app.get('/api/services', async(_req, res) => {
    //try and catch to handle exceprions
    try{
        const services = await Service.find();
        console.log('Services found', services);
        res.json(services);
    }catch(err){
        console.error('Error:', err.message);
        res.status(500).json({error: err.message});
    }
})

//Define an API endpoint to post the applications submitted from Career page 
// POST METHOD - HTTP Request

app.post('/api/apply', upload.single('resume'), async (req, res) => {
    try {
         // Log the file object to check if Multer is handling the upload
         if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
          }
      const { name, email } = req.body;
      const resume = req.file.path; // Get the file path of the uploaded resume
       
        
      // Create a new application document
      const newApplication = new CareerApplications({
        name,
        email,
        resume,
      });
  
      // Save the application in the database
      await newApplication.save();
      
      // Send email notification
    await sendEmail(
        email, // recipient email
        'Application Received', // email subject
        `Thank you for applying, ${name}. We have received your application and will review it soon.` // email body
      );

      // Send a response back to the frontend
      res.status(201).json({ message: 'Application submitted successfully!' });
  
      // Optionally send an email to the applicant (can be handled here or in a separate function)
      // Example: Use Nodemailer to send emails
    } catch (error) {
      console.error('Error submitting application:', error.message, error.stack);
      res.status(500).json({ message: 'Error submitting application. Please try again.' });
    }
  });


// Define a default route for the root URL
app.get('/', (_req, res) =>{res.send('Welcome CA Consultancy Website backend')})




// Start the Server
app.listen(PORT, () => {console.log(`Server is running on  http://localhost:${PORT}`)}) 

