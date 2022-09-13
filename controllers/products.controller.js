const productController = {

    product: function(req, res, next) {
        res.render("product");
    },

    menu: function(req, res, next){
        res.render("menu")
    },

    carrito: function(req, res, next){
        res.render("carrito")
    }

}

module.exports = productController;