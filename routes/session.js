var express = require('express');
var router = express.Router();
var Queries = require('../db/queries');
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res) {
  Queries.getAll()
  .then(function(result){
    res.json(result)
  })
});

router.get('/:id', function(req, res) {
  var id = req.params.id
  Queries.getOne(id)
  .then(function(result){
    res.json(result)
  })
});

router.post('/', function(req,res) {
  var exerciseSession = {
    exercise: req.body.exercise,
    duration: req.body.duration,
    distance: req.body.distance
  };
  Queries.create(exerciseSession)
  .then(function() {
    res.json({
      message: "session added to db"
    })
  })
})

module.exports = router;
