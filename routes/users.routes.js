var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('aquie estamos en users');
});

router.get('/register', function(req, res, next) {
  res.send('aqui estamos en register');
});

module.exports = router;
