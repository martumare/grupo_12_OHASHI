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
    }

}

module.exports = productController;