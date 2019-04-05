const Tracks = require('../models/tracks.model.js');

// Create and Save a new Artiste
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Title) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Create a new Artiste
  const tracks = new Tracks({
    Title: req.body.Title,
    Duration: req.body.Duration,
    Listenings: req.body.Listenings,
    Likes:req.body.Likes,
    Featuring:req.body.Featuring,
  });

  // Save User in the database
  tracks
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      });
    });
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  Tracks.find()
    .then(tracks => {
      res.send(tracks);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
Tracks.findById(req.params._id)
    .then(tracks => {
      if (!tracks) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params._id
        });
      }
      res.send(tracks);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params._id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with id ' + req.params._id
      });
    });
};



// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  Tracks.findByIdAndRemove(req.params._id)
    .then(tracks => {
      if (!tracks) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params._id
        });
      }
      res.send({ message: 'User deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params._id
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + req.params._id
      });
    });
};