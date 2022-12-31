const { body } = require('express-validator');
const fs = require("fs");
const path = require("path");



module.exports = {
    registerValidation: [ 
        body("emailRegister")
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debe ser un email valido'),

        body("name")
            .notEmpty()
            .withMessage("Campo nombre incompleto"),
        
        body("lastname")
            .notEmpty()
            .withMessage("Campo apellido incompleto"),

        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto"),

        body("adress")
            .notEmpty()
            .withMessage("Campo direccion incompleto"),

        body("number")
            .notEmpty()
            .withMessage("Campo numero incompleto")
            .isInt()
            .withMessage("Formato de numero invalido"),

        body("phone")
            .notEmpty()
            .withMessage("Campo telefono incompleto")
            .isInt()
            .withMessage("Formato de telefono invalido")
    ],

    loginValidation: [
        body("emailLogin")
        .notEmpty()
        .withMessage("Campo email incompleto"),
        body("passwordLogin")
        .notEmpty()
        .withMessage("Campo password incompleto")
    ]
}