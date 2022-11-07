const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

function findAll(){
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
    const data = JSON.parse(jsonData);
    return data;
}

function writeFile(data){
    const stringData = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/users.json"), stringData);
}


const usersController = {

// Render vista de Login

    profile:  function(req, res){
        res.render("profile")
    },
    
    register: function(req, res){
        const error = validationResult(req)
        if(!error.isEmpty()){
           return res.render("profile", { errors: error.mapped(), old: req.body })
        }
        const users = findAll();

        const newUser = {
            id: users.length + 1,
            email: req.body.email ,
            password: bcryptjs.hashSync(req.body.password, 10 ) ,
            calle: req.body.calle ,
            number: req.body.number,
            phone: req.body.phone
        };

        users.push(newUser);

        writeFile(users);

        res.redirect("/users/profile");

    },

    login: function(req, res){
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.render("profile", { errors: error.mapped(), old: req.body })
         }

        const users = findAll();

        const userFound = users.find(function(user){
            return user.email == req.body.email && bcryptjs.compareSync(req.body.password, user.password)
        })

        if(!userFound){
            return res.render("profile", { errorLogin: "Credenciales invalidas" }) 
        }else {
            req.session.usuarioLogeado = {
                id: userFound.id,
                name: userFound.name,
                email: userFound.email,
            };

            if(req.body.recordarme){
                res.cookie("recordarme", userFound.id, { maxAge: 60 * 60 * 60})
            }

            res.redirect("/prueba");
        }

    },
    
}




module.exports = usersController;