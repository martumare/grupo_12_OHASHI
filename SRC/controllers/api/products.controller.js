const db = require("../../database/models");
const sequelize = db.sequelize;

const apiProductsController = {
    list: (req, res) => {
        db.Dish.findAll()
            .then(
                products => {
                    let response = {
                        meta: {
                            status: 200,
                            total: products.length,
                            url: 'api/products'
                        },
                        data: products
                    }
                    res.json(response);
                }
            )
            .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Dish.findByPk(req.params.id)
            .then(
                product => {
                    let response = {
                        meta: {
                            status: 200,
                            total: product.length,
                            url: 'api/products/:id'
                        },
                        data: product
                    }
                    res.json(response);
                }
            )
            .catch(error => res.send(error))
    }

}

module.exports = apiProductsController; 