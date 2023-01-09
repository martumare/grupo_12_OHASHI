const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { log } = require("console");

const usersController = {
  // Render vista de Login

  profile: async function (req, res) {
    res.render("users");
  },

  register: async function (req, res) {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        
        return res.render("users", { errors: error.mapped(), old: req.body });
      }

      

      await db.Users.create({
        email: req.body.emailRegister,
        name: req.body.name,
        lastName: req.body.lastname,
        password: bcrypt.hashSync(req.body.password, 10),
        address: req.body.adress,
        number: req.body.number,
        phone: req.body.phone,
        image: req.file.filename,
      });

      res.redirect("/users");
    } catch (err) {
      console.log(err);
    }
  },

  login: async function (req, res) {
    try {
      const error = validationResult(req);

      if (!error.isEmpty()) {
        return res.render("users", { errors: error.mapped(), old: req.body });
      }

      const userFound = await db.Users.findOne({
        where: {
          email: req.body.emailLogin,
        },
      });


      if (
        userFound &&
        bcrypt.compareSync(req.body.passwordLogin, userFound.password)
      ) {
       
        delete userFound.password

        
        req.session.usuarioLogueado = userFound;

        if (req.body.remember) {
          res.cookie("user", user.id, { maxAge: 60000 * 24 });
        }

        res.redirect("/");
      } else {
        res.render("users", { errorMsg: "Error credenciales invalidas" });
      }
    } catch (err) {console.log(err);}
  },

  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("recordarme");
    res.redirect("/");
  },
};

module.exports = usersController;
