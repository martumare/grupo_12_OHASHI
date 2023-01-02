const { ForeignKeyConstraintError } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const alias = 'Users';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING
        },
        lastname: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        address: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.STRING
        }, 
        password: {
            type: dataTypes.STRING
        }
    }
    const config = {
        underscored: true,
        tableName: "users"
    }

    const Users = sequelize.define(alias, cols, config)

    Users.associate = (models) => {
        Users.belongsToMany(models.Dish, {
            as: "Dish",
            through: "user dish",
            ForeignKey: "user_id",
            otherKey: "dish_id"
        })
    }

    return Users;

}