var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.controller');
const { registerValidation } = require("../validations/usersValidation");

// Get login page

router.get('/profile', usersController.profile );

//Register
router.post('/profile', registerValidation, usersController.register);


module.exports = router;
