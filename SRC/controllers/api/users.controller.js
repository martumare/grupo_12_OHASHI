const db = require("../../database/models");
const sequelize = db.sequelize;

const apiUsersController = {
    list: (req, res) => {
        db.Users.findAll()
            .then(
                users => {
                    let response = {
                        meta: {
                            status: 200,
                            total: users.length,
                            url: 'api/users'
                        },
                        data: users
                    }
                    res.json(response);
                }
            )
            .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Users.findByPk(req.params.id)
            .then(
                user => {
                    let response = {
                        meta: {
                            status: 200,
                            total: user.length,
                            url: 'api/users/:id'
                        },
                        data: user
                    }
                    res.json(response);
                }
            )
            .catch(error => res.send(error))
    }

}

module.exports = apiUsersController; 