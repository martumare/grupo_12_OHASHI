const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false
  
  if (req.session && req.session.usuarioLogueado) {
    res.locals.isLogged = true
    res.locals.userLogged = req.session.usuarioLogueado
    
    if (req.session.usuarioLogueado.admin == 1) {
      

      res.locals.userAdmin = true;
      
    }
  }

  let emailInCookie = req.cookies.userEmail
  /* DataBase */
  db.Users.findAll().then((users) => {
    let userFromCookie = users.find((i) => i.email == emailInCookie)
    if (userFromCookie) {
      req.session.usuarioLogueado = userFromCookie
    }

    if (req.session.usuarioLogueado) {
      res.locals.isLogged = true
      res.locals.userLogged = req.session.usuarioLogueado
    }
    next()
  })
}

module.exports = userLoggedMiddleware