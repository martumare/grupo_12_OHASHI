const fs = require("fs");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../../database/models");

const userApi = {
  allUsers: (req, res) => {
    db.Users.findAll({
      attributes: ["id", "name", "lastName", "email", "admin", "phone", "address"],
    })
      .then((users) => {
        for (let i = 0; i < users.length; i++) {
          users[i].setDataValue(
            "detail",
            `http://localhost:3000/api/users/profile/${users[i].id}`
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
          image: `http://localhost:3000/images/users/${user.image}`,
        };
        res.status(200).json(response);
      })
      .catch((error) => console.error(error));
  },
};
module.exports = userApi;
