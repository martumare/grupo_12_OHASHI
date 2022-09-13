var express = require('express');
const usersController = require('../controllers/users.controller');
var router = express.Router();

// Get login page

router.get('/login',  usersController.login );

// Get register page

router.get('/register', usersController.register);

module.exports = router;
