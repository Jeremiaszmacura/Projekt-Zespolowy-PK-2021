var express = require('express');
var UserController = require('../controller/UserController');
var authentication = require('../middleware/authentication');
var tokenValidation = require('../middleware/tokenValidation');
var router = express.Router();


router.post('/login', UserController.login);
router.post('/register', authentication.authenticateUser, UserController.postUserRegister);
router.get('/details', tokenValidation.authenticateToken, UserController.getUserDetails);
router.put('/details', tokenValidation.authenticateToken, UserController.updateUserDetails);
router.put('/changePassword', tokenValidation.authenticateToken, UserController.updateUserPassword);
router.delete('/', tokenValidation.authenticateToken, UserController.remove);


module.exports = router;
