const express = require('express');
const nosotrosController = require('../controllers/nosotros.controller');
const router = express.Router();

// Get home page. 
router.get('/', nosotrosController.nosotros);

module.exports = router;
