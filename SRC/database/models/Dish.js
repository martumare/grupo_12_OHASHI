module.exports = (sequelize, dataTypes) => {
    const alias = 'Dish';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.STRING
        },
        dishCategory_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        }
    }
    const config = {
        underscored: true,
        tableName: "dish"
    }

    const Dish = sequelize.define(alias, cols, config)

    Dish.associate = (models) => {
        Dish.belongsTo(models.DishCategory, {
            as: "dishCategory",
            foreignKey: "dishCategory_id"
        })
    }

    return Dish;

}