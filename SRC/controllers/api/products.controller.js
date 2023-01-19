const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');



const dishesAPIController = {
    'list': (req, res) => {
        db.Dish.findAll()
        .then(dishes => {

            for (let i = 0; i < dishes.length; i++) {
                dishes[i].setDataValue(
                  "pathImg",
                  `http://localhost:${process.env.PORT}/images/imagenes-platos/${dishes[i].name}/${dishes[i].image}`
                );
              }

            let respuesta = {
                meta: {
                    status : 200,
                    total: dishes.length,
                    url: 'api/dishes'
                },
                data: dishes
            }
                res.json(respuesta);
            })
    },
    
    'productDetail': (req, res) => {
        db.Dish.findByPk(req.params.id)
          .then(function (productSelected) {

            let response = {
              id: productSelected.id,
              name: productSelected.name,
              description: productSelected.description,
              price: productSelected.price,
              orders: productSelected.orders,
              pathImg: `http://localhost:${process.env.PORT}/images/imagenes-platos/${productSelected.name}/${productSelected.image}`,
              status: 200,
            };
    
            res.status(200).json(response);
          })
          .catch((error) => res.json(error));
      },

      'masVendido': (req, res) => {
        db.Dish.findOne()
        .then(dishes => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: dishes.length,
                    url: 'api/dishes'
                },
                data: dishes
            }
                res.json(respuesta);
            })
    },

    'last':  (req,res) => {
        db.Dish.findAll()
        .then (dish => { 
            const lastDish = dish.pop();
            let respuesta = {
                meta: {
                    status : 200,
                    total: dish.length,
                    url: 'api/products'
                },
                data: lastDish
            }

        res.json(respuesta);
        console.log("--------------------------")
        console.log(respuesta)
        })
        },

    'create': (req,res) => {
        dishes
        .create(
            {
                name: req.body.title,
                orders: req.body.orders,
                description: req.body.description,
                price: req.body,price,
                image: req.file.filename
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/dishes/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/dishes/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    'update': (req,res) => {
        let dishId = req.params.id;
        Dish.update(
            {
                name: req.body.title,
                orders: req.body.orders,
                description: req.body.description,
                price: req.body,price,
                image: req.file.filename
            },
            {
                where: {id: dishId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/dishes/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/dishes/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    'destroy': (req,res) => {
        let dishId = req.params.id;
        Dish
        .destroy({where: {id: dishId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/dishes/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/dishes/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
}

module.exports = dishesAPIController;