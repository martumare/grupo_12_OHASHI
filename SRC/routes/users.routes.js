var express = require('express');
const usersController = require('../controllers/users.controller');
var router = express.Router();

// Get login page

router.get('/profile',  usersController.profile );

router.post('/profile', usersController.login);


module.exports = router;
