var express = require('express');
var router = express.Router();
// we import our artiste controller
var artistes = require('../controllers/artistes.controller');

router.get('/',artistes.findAll);
/* GET one artiste*/
router.get('/:_id', artistes.findOne);

/* DELETE  one artiste */
router.delete('/:_id', artistes.delete);
/* update  one artiste 
router.post('/:_id', artiste.update);

/* create  one artiste */
router.put('/', artistes.create);

module.exports = router;