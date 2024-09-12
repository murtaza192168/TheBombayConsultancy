const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
// Removed unused imports

// Import the Service Model from (models directory)
const Service = require('./models/Service');
// Import the Career Model from models directory
const CareerApplications = require('./models/CareerApplications');

// Create an Express server
const app = express();
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8080;

app.use(cors(
   {origin: 'https://the-bombay-consultancy-fyyjk73kw-murtaza192168s-projects.vercel.app',} 
));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error('Failed to connect to MongoDB database', err.message));

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

// Define an API endpoint to post the applications submitted from Career page (without file upload)
app.post('/api/apply', async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log the request body
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required.' });
        }

        // Create a new application document (without resume)
        const newApplication = new CareerApplications({
            name,
            email,
        });

        // Save the application in the database
        await newApplication.save();

        // Send a response back to the frontend
        res.status(201).json({ message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error submitting application:', error); // Log detailed error
        res.status(500).json({ message: 'Error submitting application. Please try again.' });
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
