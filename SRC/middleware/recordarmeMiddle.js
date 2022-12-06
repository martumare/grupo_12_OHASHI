// const fs = require('fs');
// const path = require('path');

// function findAll(){
//     const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
//     const data = JSON.parse(jsonData);
//     return data;
// }

// function recordarmeMiddleware (req, res, next){
//     if(req.cookies.recordarme && !req.session.usuarioLogueado){
//         const users = findAll();

//         const userFound = users.find(function(user){
//             return user.id == req.cookies.recordarme
//         })

//         req.session.usuarioLogueado = {
//             id: userFound.id,
//             name: userFound.name,
//             email: userFound.emailLogin,
//         };
//     }
    
//     next()
// }

// NO FUNCIONA PERO DEJO EL PROCESO POR LAS DUDAS

// module.exports = recordarmeMiddleware;