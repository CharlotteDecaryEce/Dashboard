const mongoose = require('mongoose');

const Albums = new mongoose.Schema(
  {
    Title:  String,
    
    Release: String,
      
    Genre: String,
      
    Cover:String,

  },
);

module.exports = mongoose.model('Albums', Albums);