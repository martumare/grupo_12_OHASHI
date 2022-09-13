var express = require('express');
const usersController = require('../controllers/users.controller');
var router = express.Router();

/* GET users listing. */
// '../controllers/index.controller'

router.get('/login',  usersController.login );

router.get('/register', usersController.register);

module.exports = router;
