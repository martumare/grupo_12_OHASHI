const express = require('express');
const productsController = require('../controllers/products.controller')
const router = express.Router();

// Get products page

router.get('/', productsController.product);

// Get menu page

router.get('/menu', productsController.menu);


module.exports = router;
