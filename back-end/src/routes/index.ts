var express = require('express');
var IndexController = require('../controller/IndexController');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({content: IndexController.getHelloWorld()});
});

module.exports = router;
