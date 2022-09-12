const express = require('express');
const indexController = require('../controllers/index.controller');
const router = express.Router();

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
