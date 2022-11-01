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
        body("email")
            .notEmpty()
            .withMessage("Campo email incompleto")
            .isEmail()
            .withMessage("formato de email invalido")
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

        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto"),

        body("calle")
            .notEmpty()
            .withMessage("Campo calle incompleto"),

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
    ]}