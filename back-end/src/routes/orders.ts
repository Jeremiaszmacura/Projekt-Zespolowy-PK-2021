var express = require('express');
var OrderController = require('../controller/OrderController');
var tokenValidation = require('../middleware/tokenValidation');
var router = express.Router();

router.post('/', tokenValidation.authenticateToken, OrderController.save);

module.exports = router;