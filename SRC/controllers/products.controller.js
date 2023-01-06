const db = require("../database/models")



const productsController = {
    menu:async (req, res) =>{
        const data = await db.Dish.findAll()
       
        res.render("menu", {data})  
    },

    detail: async (req,res) =>{
        const data = await db.Dish.findAll()
        const platoEncontrado = data.find(function(plato){
            return plato.id == req.params.id   
        })

        res.render("product-detail", { plato : platoEncontrado})
    },

    create: (req,res) =>{
        res.render("product-create-form");
    },


    //CREATE

    store: async (req,res) =>{
        
        const newProduct = {   
            
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            image: req.file.filename
        }
        
     await db.Dish.create(newProduct);

        res.redirect("/products/")
    },

    
    edit: async (req, res) => {
        
        const platoEncontrado = await db.Dish.findOne({
            where: {id: req.params.id}
        });


        res.render("product-update-form", { plato: platoEncontrado })
    },

    //UPDATE
    update: async (req, res) => {
        
        const platoEncontrado = await db.Dish.findByPk(req.params.id);

       await db.Dish.update(
        {
            name: req.body.name || platoEncontrado.name,
            description: req.body.description || platoEncontrado.description,
            price: req.body.price || platoEncontrado.price,
            image: req.file ? req.file.filename : platoEncontrado.image
       }, 
       {where: {id: req.params.id}});  

        res.redirect("/products/")
    },

    //DELETE

    delete: async (req, res) => {
        
        

       await db.Dish.destroy({where: {id: req.params.id}});

        res.redirect("/products/")
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

module.exports = productsController;