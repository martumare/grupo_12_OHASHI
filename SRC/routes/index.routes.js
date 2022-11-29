const express = require('express');
const indexController = require('../controllers/index.controller');
const router = express.Router();

// Get home page. 
router.get('/', indexController.index);

router.get("/prueba", function(req, res){
    if(req.session.usuarioLogueado){
        res.send("Estas logueado!")
    } else {
        res.send("El usuario no se encuentra logueado")
    }
})

module.exports = router;
