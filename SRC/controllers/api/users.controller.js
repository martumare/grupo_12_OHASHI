// const db = require("../../database/models");
// const sequelize = db.sequelize;

// const apiUsersController = {
//     list: (req, res) => {
//         db.Users.findAll()
//             .then(
//                 users => {
//                     let response = {
//                         meta: {
//                             status: 200,
//                             total: users.length,
//                             url: 'api/users'
//                         },
//                         data: users
//                     }
//                     res.json(response);
//                 }
//             )
//             .catch(error => res.send(error))
//     },
//     detail: (req, res) => {
//         db.Users.findByPk(req.params.id)
//             .then(
//                 user => {
//                     let response = {
//                         meta: {
//                             status: 200,
//                             total: user.length,
//                             url: 'api/users/:id'
//                         },
//                         data: user
//                     }
//                     res.json(response);
//                 }
//             )
//             .catch(error => res.send(error))
//     }

// }

// module.exports = apiUsersController;

const fs = require("fs");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../../database/models");

const userApi = {
  allUsers: (req, res) => {
    db.Users.findAll({
      attributes: ["id", "name", "lastName", "email", "admin"],
    })
      .then((users) => {
        for (let i = 0; i < users.length; i++) {
          users[i].setDataValue(
            "detail",
            `http://localhost:${process.env.PORT}/api/users/profile/${users[i].id}`
          );
        }

        let countAdmin = 0;
        users.forEach(user => {
          if (user.admin == 1){
            countAdmin ++;
          }
        }) 

        let response = {
          meta: {
           total: users.length,
           status: 200,
          },
          data: {
            users,
            countAdmin,
            count: users.length
          }
        };

        res.status(200).json(response);
      })
      .catch((error) => res.json(error));
  },

  profile: (req, res) => {
    db.Users.findByPk(parseInt(req.params.id, 10))
      .then((user) => {
        let response = {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          image: `http://localhost:${process.env.PORT}/images/users/${user.image}`,
        };
        res.status(200).json(response);
      })
      .catch((error) => console.error(error));
  },
};
module.exports = userApi;
