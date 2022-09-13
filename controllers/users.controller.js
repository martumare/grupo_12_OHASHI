const usersController = {


// Render vista de Login

    login:  function(req, res, next){
        res.render("login")
    },

// Render vista de Register
    
    register: function(req, res, next){
        res.render("register")
    }
}

module.exports = usersController;