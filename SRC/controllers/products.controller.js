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
    menu: (req, res) =>{
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
            description: req.body.description,
            price: Number(req.body.price),
            image: req.file.filename
        }

        data.push(newProduct);  

        writeFile(data)  

        res.redirect("/products/"); 
    },

    edit: (req, res) => {
        const data = findAll()
        const platoEncontrado = data.find(function(plato){
            return plato.id == req.params.id   
        })

        res.render("product-update-form", { plato: platoEncontrado });
    },

    update: (req, res) => {
        const data = findAll()
        const platoEncontrado = data.find(function(plato){
            return plato.id == req.params.id
        });

        platoEncontrado.name = req.body.name;
        platoEncontrado.description = req.body.description;
        platoEncontrado.price = req.body.price;
    
        writeFile(data)  

        res.redirect("/products/"); 
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