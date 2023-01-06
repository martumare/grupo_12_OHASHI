module.exports = (sequelize, dataTypes) => {
    const alias = 'DishCategory';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: dataTypes.STRING
        } 
    }
    const config = {
        underscored: true,
        tableName: "dishcategory"
    }

    const DishCategory = sequelize.define(alias, cols, config)

    return DishCategory;

}