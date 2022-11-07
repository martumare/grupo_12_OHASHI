var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.controller');
const validations = require("../validations/usersValidation");

// Get login page

router.get('/profile', usersController.profile );

//Register
router.post('/profile', validations.registerValidation, usersController.register);

//Login
router.post('/profile', validations.loginValidation, usersController.login);


module.exports = router;
