const express = require('express');
const router = express.Router();
const products = require('../../controllers/api/products.controller');

//Rutas

router.get('/', products.list);

router.get('/last', products.last);

router.post('/create', products.create);

router.put('/update/:id', products.update);

router.delete('/delete/:id', products.destroy);

router.get('/:id', products.productDetail);

router.post('/checkOut', products.checkOut);

module.exports = router;