var express = require('express');
var OrderController = require('../controller/OrderController');
var tokenValidation = require('../middleware/tokenValidation');
var router = express.Router();

router.post('/', tokenValidation.authenticateToken, OrderController.save);
router.get('/', tokenValidation.authenticateToken, OrderController.getOrder);
router.put('/paid/:id', tokenValidation.authenticateToken, OrderController.setStatusPaid);

module.exports = router;