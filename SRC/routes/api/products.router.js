const express = require('express');
const router = express.Router();
const products = require('../../controllers/api/products.controller');

//Rutas
//Listado de películas
router.get('/', products.list);
//Detalle de una película
router.get('/:id', products.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/recomended/:rating', products.recomended);
//Agregar una película
router.post('/create', products.create);
//Modificar una película
router.put('/update/:id', products.update);
//Eliminar una película
router.delete('/delete/:id', products.destroy);

module.exports = router;