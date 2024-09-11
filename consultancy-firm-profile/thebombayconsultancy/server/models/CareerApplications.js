const mongoose = require('mongoose');

// Define the schema for application data on the career page
const applicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    // resume: String // Removed as per the requirement
});

// Create and export the model
module.exports = mongoose.model('CareerApplications', applicationSchema);
