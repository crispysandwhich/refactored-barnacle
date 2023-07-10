const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  originalname: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
},{timestamps: true});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
