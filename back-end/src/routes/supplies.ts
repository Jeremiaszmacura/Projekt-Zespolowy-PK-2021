var express = require('express');
var SupplyController = require('../controller/SupplyController');
var tokenValidation = require('../middleware/tokenValidation');
var router = express.Router();

router.post('/', tokenValidation.authenticateToken, SupplyController.save);

module.exports = router;