const mongoose = require('mongoose');

const Artistes = new mongoose.Schema(
  {
    Nom:  String,
    
    Birth: String,
      
    Followers: String,
  },
);

module.exports = mongoose.model('Artistes', Artistes);