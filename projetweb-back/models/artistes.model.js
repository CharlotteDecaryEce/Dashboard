const mongoose = require('mongoose');

const Artistes = new mongoose.Schema(
  {
    Nom:  String,
    
    Birth: String,
      
    Followers: String,
      
    Albums:String,
  },
);

module.exports = mongoose.model('Artistes', Artistes);