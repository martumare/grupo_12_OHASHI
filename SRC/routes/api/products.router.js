const express = require('express');
const router = express.Router();
const dishesAPIController = require('../../controllers/api/dishesAPIController');

//Rutas
//Listado de películas
router.get('/', dishesAPIController.list);
//Detalle de una película
router.get('/:id', dishesAPIController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/recomended/:rating', dishesAPIController.recomended);
//Agregar una película
router.post('/create', dishesAPIController.create);
//Modificar una película
router.put('/update/:id', dishesAPIController.update);
//Eliminar una película
router.delete('/delete/:id', dishesAPIController.destroy);

module.exports = router;