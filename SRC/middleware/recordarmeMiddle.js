const fs = require('fs');
const path = require('path');
const db = require('../database/models');



function recordarmeMiddleware (req, res, next){
    if(req.cookies.recordarme && !req.session.usuarioLogueado){

        const userFound = db.Users.findOne(function(user){
            return user.id == req.cookies.recordarme
        })

        req.session.usuarioLogueado = {
            id: userFound.id,
            name: userFound.name,
            email: userFound.emailLogin,
        };
    }
    
    next()
}

module.exports = recordarmeMiddleware;