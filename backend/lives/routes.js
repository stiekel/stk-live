const express = require('express');
const router = express.Router();

const lives = [];

// get live list
router.get('/', function(req, res, next){
  res.json(lives);
});

// publish a live
router.post('/', function(req, res, next){
  res.json(lives);
});

module.exports = router;
