const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models")

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

    profile: async function(req, res){
        res.render("users")
    },
    
    register: async function(req, res){
        try{

        const error = validationResult(req)
        if(!error.isEmpty()){
           return res.render("users", { errors: error.mapped(), old: req.body })
        }
    

        const newUser = {
            // id: users.length + 1,
            userEmail: req.body.emailRegister,
            name: req.body.name,
            lastname: req.body.lastname,
            password: bcryptjs.hashSync(req.body.password, 10 ) ,
            adress: req.body.adress ,
            number: req.body.number,
            phone: req.body.phone,
            image: req.file.filename
        };

       await db.Customer.create(newUser);

        res.redirect("/users");
    }catch(err){
        console.log(err)
    }},

    login: async function(req, res){
        try {

            const error = validationResult(req);

            if(!error.isEmpty()){
            return res.render("users", { errors: error.mapped(), old: req.body })
         }

        

         const userFound = await db.Customer.findOne({
            where:{
                email: req.body.email
            }
        })

        if(userFound && bcrypt.compareSync(req.body.password, userFound.password)){
            //proceso session
            let user = {
                id: userFound.id,
                name: userFound.name,
                last_name: userFound.last_name,
                avatar: userFound.avatar,
            }

            req.session.usuarioLogueado = user

            if(req.body.remember){
                res.cookie("user", user.id, {maxAge: 60000 * 24})
            }

            res.redirect("/")

        }else{
            res.render("login", {errorMsg: "Error credenciales invalidas"})
        }}catch(err){
        
        }

    },

    logout: function(req, res){
        req.session.destroy()
        res.clearCookie("recordarme")
        res.redirect("/");
    },
    
}




module.exports = usersController;