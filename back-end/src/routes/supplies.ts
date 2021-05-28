var express = require('express');
var SupplyController = require('../controller/SupplyController');
var tokenValidation = require('../middleware/tokenValidation');
var router = express.Router();

router.post('/', tokenValidation.authenticateToken, SupplyController.save);
router.get('/', tokenValidation.authenticateToken, SupplyController.getSupplies);
router.put('/setStatusDone/:id', tokenValidation.authenticateToken, SupplyController.setStatusDone);

module.exports = router;