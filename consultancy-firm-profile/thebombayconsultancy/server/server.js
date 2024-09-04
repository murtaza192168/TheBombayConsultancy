const express = require('express');  //Web framework for Node.js.
const dotenv = require('dotenv');
const mongoose = require('mongoose');  //MongoDB object modeling tool.
const cors = require('cors');

//Imprt the Service Model from (models directory)
const Service = require('./models/Service');

// CREATE AN EXPRESS SERVER
const app = express();
dotenv.config({path:'./config.env'})
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());


// mongodb code: CONNECT TO MongoDB Database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>console.log('Connected to MongoDB successfully'))
.catch(err => console.error('Failed to connect to MongoDB database', err.message));
  


//Define an API endpoint to get the services
app.get('/api/services', async(req, res) => {
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

// Define a default route for the root URL
app.get('/', (req, res) =>{res.send('Welcome CA Consultancy Website backend')})

// Start the Server
app.listen(PORT, () => {console.log(`Server is running on  http://localhost:${PORT}`)}) 

