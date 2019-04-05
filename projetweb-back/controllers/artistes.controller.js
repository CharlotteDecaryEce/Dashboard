const Artistes = require('../models/artistes.model.js');

// Create and Save a new Artiste
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nom) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Create a new Artiste
  const artistes = new Artistes({
    Nom: req.body.Nom,
    Birth: req.body.Birth,
    Followers:req.body.Followers,
  });

  // Save User in the database
  artistes
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
  Artistes.find()
    .then(artistes => {
      res.send(artistes);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
Artistes.findById(req.params._id)
    .then(artistes => {
      if (!artistes) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params._id
        });
      }
      res.send(artistes);
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
  Artistes.findByIdAndRemove(req.params._id)
    .then(artistes => {
      if (!artistes) {
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