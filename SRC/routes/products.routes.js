const express = require('express');
const productsController = require('../controllers/products.controller')
const router = express.Router();

// Get products page

router.get('/', productsController.product);

// Get menu page

router.get('/menu', productsController.menu);

// Get carrito page

router.get('/carrito', productsController.carrito);

// Get Reservar page

router.get('/reservar', productsController.reservar);

// Get pedir page

router.get('/pedir', productsController.pedir);

module.exports = router;
