const fs = require("fs");
const path = require("path");
const db = require("../database/models")



const productsController = {
    menu:async (req, res) =>{
        const data = await db.Dish.findAll()
        console.log(data)
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
        console.log(newProduct);
      db.Dish.create(newProduct);

        res.redirect("/products/")
    },

    
    edit: (req, res) => {
        const data = findAll()
        const platoEncontrado = data.find(function(plato){
            return plato.id == req.params.id   
        })

        res.render("product-update-form", { plato: platoEncontrado })
    },

    //UPDATE
    update: (req, res) => {
        const data = findAll()
        const platoEncontrado = data.find(function(plato){
            return plato.id == req.params.id
        });

        platoEncontrado.name = req.body.name;
        platoEncontrado.description = req.body.description;
        platoEncontrado.price = req.body.price;
        platoEncontrado.image = req.file ? req.file.filename : platoEncontrado.image;
    
        writeFile(data)  

        res.redirect("/products/")
    },

    //DELETE

    delete: (req, res) => {
        const data = findAll()
        const platoEncontrado = data.findIndex(function(plato){
            return plato.id == req.params.id
        });

        data.splice(platoEncontrado, 1)

        writeFile(data)

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