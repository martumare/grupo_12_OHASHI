const express = require('express');
const productsController = require('../controllers/products.controller')
const router = express.Router();

/* Get products view */
router.get('/', productsController.product);

router.get('/menu', productsController.menu);


module.exports = router;
