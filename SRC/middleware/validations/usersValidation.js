const { body } = require('express-validator');
const fs = require("fs");
const path = require("path");



module.exports = {
    registerValidation: [ 
        body("emailRegister")
        .notEmpty().withMessage('*Ingresa tu mail').bail()
        .isEmail().withMessage('*Debe ser un email valido'),

        body("name")
            .notEmpty()
            .withMessage("*Nombre incompleto"),
        
        body("lastname")
            .notEmpty()
            .withMessage("*Apellido incompleto"),

        body("password")
            .notEmpty()
            .withMessage("*Ingresa una contraseña"),

        body("adress")
            .notEmpty()
            .withMessage("*Direccion incompleta"),

        body("number")
            .notEmpty()
            .isInt()
            .withMessage("*Formato de numero invalido"),

        // body("image")
        //     .notEmpty()
        //     .withMessage("*Selecciona una foto de perfil"),
            
        body("phone")
            .notEmpty()
            .withMessage("*Telefono incompleto")
            .isInt()
            .withMessage("*Formato de telefono invalido"),

    
    ],

    loginValidation: [
        body("emailLogin")
        .notEmpty()
        .withMessage("*Ingresa tu email"),
        body("passwordLogin")
        .notEmpty()
        .withMessage("*Ingresa tu contraseña")
    ]
}