module.exports = (sequelize, dataTypes) => {
    const alias = 'CustomerCategory';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role: {
            type: dataTypes.STRING
        } 
    }
    const config = {
        underscored: true,
        tableName: "customercategory"
    }

    const CustomerCategory = sequelize.define(alias, cols, config)

    return CustomerCategory;

}