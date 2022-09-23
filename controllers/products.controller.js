const productController = {


// Render vista de product

    product: function(req, res, next) {
        res.render("product");
    },

// Render vista de menu

    menu: function(req, res, next){
        res.render("menu")
    },

// Render vista de carrito

    carrito: function(req, res, next){
        res.render("carrito")
    },

// Render vista de reserva

    reservar: function(req, res, next){
        res.render("reservar")
    },

// Render vista de reserva

    pedir: function(req, res, next){
        res.render("pedir")
    }    

}

module.exports = productController;