var express = require('express');
var router = express.Router();
var Queries = require('../db/queries');
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('session!')
});

router.post('/', function(req,res){
  console.log(req.body);
  var exerciseSession = {
    exercise: req.body.exercise,
    duration: req.body.duration,
    distance: req.body.distance,
  };

  Queries.create(exerciseSession)
  .then(function() {
    res.json({
      message: "session added to db"
    })
  })
})

module.exports = router;
