var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.controller');
const validations = require("../validations/usersValidation");

// Get login page

router.get('/', usersController.profile );

//Register
router.post('/register', validations.registerValidation, usersController.register);

//Login
router.post('/login', validations.loginValidation, usersController.login);

//Cerrar sesion
router.post("/logout", usersController.logout);

module.exports = router;
