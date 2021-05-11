var express = require('express');
var UserController = require('../controller/UserController');
var router = express.Router();

router.get('/', UserController.all);
// router.post('/', UserController.save);
router.get('/:id', UserController.one);
router.delete('/:id', UserController.remove);


module.exports = router;
