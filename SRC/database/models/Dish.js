const { DataTypes, primaryKey } = require("sequelize");

module.exports = (sequelize) => {
    const alias = 'Dish';

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        orders: {
            type: DataTypes.INTEGER
        }
        
    }
    const config = {
        tableName: "dish",
        timestamps: false
        
    }

    const Dish = sequelize.define(alias, cols, config)

    return Dish;

}