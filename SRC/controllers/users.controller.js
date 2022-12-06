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
        res.render("users")
    },
    
    register: function(req, res){
        const error = validationResult(req)
        if(!error.isEmpty()){
           return res.render("users", { errors: error.mapped(), old: req.body })
        }
        const users = findAll();

        const newUser = {
            id: users.length + 1,
            userEmail: req.body.emailRegister,
            name: req.body.name,
            lastname: req.body.lastname,
            password: bcryptjs.hashSync(req.body.password, 10 ) ,
            adress: req.body.adress ,
            number: req.body.number,
            phone: req.body.phone,
            image: req.file.filename
        };

        users.push(newUser);

        writeFile(users);

        res.redirect("/users");

    },

    login: function(req, res){
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.render("users", { errors: error.mapped(), old: req.body })
         }

        const users = findAll();

        const userFound = users.find(function(user){
            return user.userEmail == req.body.emailLogin && bcryptjs.compareSync(req.body.passwordLogin, user.password)
        })

        if(!userFound){
            return res.render("users", { errorLogin: "Credenciales invalidas" }) 
        }else {
            req.session.usuarioLogueado = {
                id: userFound.id,
                name: userFound.name,
                email: userFound.emailLogin,
            };

            if(req.body.recordarme){
                res.cookie("recordarme", userFound.id)
            }

            res.redirect("/prueba");
        }

    },

    logout: function(req, res){
        req.session.destroy()
        res.clearCookie("recordarme")
        res.redirect("/");
    },
    
}




module.exports = usersController;