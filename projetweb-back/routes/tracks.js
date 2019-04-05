var express = require('express');
var router = express.Router();
// we import our artiste controller
var tracks = require('../controllers/tracks.controller');

router.get('/',tracks.findAll);
/* GET one artiste*/
router.get('/:_id', tracks.findOne);

/* DELETE  one artiste */
router.delete('/:_id', tracks.delete);
/* update  one artiste 
router.post('/:_id', artiste.update);

/* create  one artiste */
router.put('/', tracks.create);

module.exports = router;