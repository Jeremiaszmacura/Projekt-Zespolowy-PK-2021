var express = require('express');
var IndexController = require('../controller/IndexController');
var router = express.Router();

router.get('/', IndexController.getHelloWorld);

module.exports = router;
