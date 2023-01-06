module.exports = (sequelize, dataTypes) => {
    const alias = 'CustomerDish';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customer_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        dish_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        }
    }
    const config = {
        underscored: true,
        tableName: "customer_dish"
    }

    const CustomerDish = sequelize.define(alias, cols, config)

    CustomerDish.associate = (models) => {
        CustomerDish.belongsTo(models.Customer, {
            as: "customer",
            foreignKey: "customer_id"
        }),
        CustomerDish.belongsTo(models.Dish, {
            as: "dish",
            foreignKey: "dish_id"
        })
    }

    return CustomerDish;

}