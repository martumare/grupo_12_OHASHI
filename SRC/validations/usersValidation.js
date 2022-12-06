const { body } = require('express-validator');
const fs = require("fs");
const path = require("path");

function findAll(){
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
    const data = JSON.parse(jsonData);
    return data;
}

module.exports = {
    registerValidation: [ 
        body("emailRegister")
            .notEmpty()
            .withMessage("Campo email incompleto")
            .isEmail()
            .withMessage("Formato de email invalido")
            .custom(function(value, {req}){
                const users = findAll()
                const usuarioEncontrado = users.find(function(user){
                    return user.email == value;
                })
                if(usuarioEncontrado){
                    return false
                }else{
                    return true
                }
            }).withMessage("Email ya registrado") ,

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