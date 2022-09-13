var express = require('express');
const usersController = require('../controllers/users.controller');
var router = express.Router();

// Get login page

router.get('/profile',  usersController.profile );



module.exports = router;
