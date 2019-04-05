const mongoose = require('mongoose');

const Tracks = new mongoose.Schema(
  {
    Title:  String,

    Duration: String,
    
    Listenings: String,
      
    Likes: String,
      
    Featuring:String,
  },
);

module.exports = mongoose.model('Tracks', Tracks);