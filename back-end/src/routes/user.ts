var express = require('express');
var UserController = require('../controller/UserController');
var authentication = require('../middleware/authentication');
var router = express.Router();

router.get('/', UserController.all);
router.post('/', authentication.authenticateUser, UserController.save);
router.get('/:id', UserController.one);
router.delete('/:id', UserController.remove);
router.get('/details/:id', UserController.getUserDetails);
router.put('/details/:id', UserController.updateUserDetails);
router.put('/changePassword/:id', UserController.updateUserPassword);
router.post('/login', UserController.login);


module.exports = router;
