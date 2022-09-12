const express = require('express');

const path = require('path');

const app = express();

const publicPath= path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, ()=> {console.log("Servidor corriendo en el puerto 3000");});

/*  RUTAS A LAS PAGINAS */
app.get("/", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/index.html")));
app.get("/register", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/register.html")));
app.get("/product", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/product.html")));
app.get('/login.html', (req, res)=> res.sendFile(path.resolve(__dirname, "./views/login.html")));
app.get("/menu", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/menu.html")));
app.get("/carrito", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/carrito.html")));

