const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  imageSrc: String,
 title: String,
 description: String, 
 readMore: String
});
module.exports = mongoose.model('Service', ServiceSchema);