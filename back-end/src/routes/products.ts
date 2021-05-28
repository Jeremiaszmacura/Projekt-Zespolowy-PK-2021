var express = require('express');
var ProductController = require('../controller/ProductController');
var router = express.Router();

router.get('/', ProductController.all);
router.post('/', ProductController.save);
router.get('/categories', ProductController.getCategories);
router.post('/categories', ProductController.saveCategory);
router.get('/:id', ProductController.one);
router.delete('/:id', ProductController.remove);


module.exports = router;
