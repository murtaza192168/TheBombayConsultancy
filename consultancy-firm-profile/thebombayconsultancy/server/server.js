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
mongoose.connect('mongodb+srv://murtazashabbir:HHf80v4odrkyPfLn@clustertbc.vzjol.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTBC', {
  
});
//error handling at mongodb connection, 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log("Connected to MongDB successfully");
    
})





// Requesting the route for the Response from the server
app.get('/', (req, res) =>{res.send('CA Consultancy Website backend')})

//Define an API endpoint to get the services
app.get('/api/services', async(req, res) => {
    //try and catch to handle exceprions
    try{
        const services = await Service.find();
        res.json(services);
    }catch(err){
        res.status(500).json({error: err.message});
    }
})

// Start the Server
app.listen(PORT, () => {console.log('Server is running on  http://localhost:8080')}) 

