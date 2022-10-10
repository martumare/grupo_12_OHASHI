const fs = require("fs");
const path = require("path");

function findAll(){
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/products.json"));
    const data = JSON.parse(jsonData);
    return data
}

function writeFile(data){
    const dataString = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString); 
}



const productController = {
    list: (req, res) =>{
        const data = findAll()
        res.render("menu", { products: data})  
    },
    detail: (req,res) =>{
        const data = findAll()
        const platoEncontrado = data.find(function(plato){
            return plato.id == req.params.id   
        })

        res.render("product-detail", { plato : platoEncontrado})
    },
    create: (req,res) =>{
        res.render("product-create-form");
    },
    store: (req,res) =>{
        const data = findAll()  

        const newProduct = {   
            id: data.length + 1,
            name: req.body.name,
            price: Number(req.body.price),
            category: req.body.category,
            description: req.body.description,
            image: req.file.filename
        }

        data.push(newProduct);  

        writeFile(data)  

        res.redirect("/products/menu"); 
    },


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