var express = require('express');
var router = express.Router();
// we import our artiste controller
var albums = require('../controllers/albums.controller');

router.get('/', albums.findAll);
/* GET one artiste*/
router.get('/:_id', albums.findOne);

/* DELETE  one artiste */
router.delete('/:_id', albums.delete);
/* update  one artiste 
router.post('/:_id', artiste.update);

/* create  one artiste */
router.put('/', albums.create);

module.exports = router;