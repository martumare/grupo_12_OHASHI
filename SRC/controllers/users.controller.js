const usersController = {


// Render vista de Login

    profile:  function(req, res, next){
        res.render("profile")
    },

    login: function(req, res, next){
        let usuario = {
            email: req.body.email,
            contraseña: req.body.password,
        }

        //GUARDARLA 

        res.redirect('/');
    },

}



module.exports = usersController;