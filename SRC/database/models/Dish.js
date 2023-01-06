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
        image: {
            type: dataTypes.STRING
        }
        
    }
    const config = {
        tableName: "Dish",
        timestamps: false
        
    }

    const Dish = sequelize.define(alias, cols, config)

    
    Dish.associate = (models) => {
        Dish.belongsToMany(models.Users, {
            as: "Users",
            through: "user dish",
            ForeignKey: "dish_id",
            otherKey: "user_id"
        })
    }

    return Dish;

}