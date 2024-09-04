const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
 title: String,
 description: String, 
});
module.exports = mongoose.model('Service', ServiceSchema);