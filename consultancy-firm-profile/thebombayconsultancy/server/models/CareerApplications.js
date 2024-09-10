const mongoose = require('mongoose');

// define the schema for application data on career page
const applicationSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    resume: {type:String, required: true} //Stores the path to the uploaded resume

    // Create a mongoose model for an application in career
})
module.exports = mongoose.model('CareerApplications', applicationSchema);