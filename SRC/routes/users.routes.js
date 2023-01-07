const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const validations = require("../middleware/validations/usersValidation");
const multer = require('multer');
const path = require('path');

// Configuracion MULTER
const storage = multer.diskStorage({
	destination: (req, file, cb) => { 
        cb(null, path.join(__dirname,'../../public/images/users'))
	},

	filename: (req, file, cb) => { 
        const newFilename = file.fieldname + Date.now() + "-" + path.extname(file.originalname);
		cb(null, newFilename);
    }
});  

const upload = multer( {storage: storage} );


// Get login page

router.get('/', usersController.profile );

//Register
router.post('/register', upload.single("image"), validations.registerValidation, usersController.register);

//Login
router.post('/login', validations.loginValidation, usersController.login);

//Cerrar sesion
router.get("/logout", usersController.logout);

module.exports = router;
