module.exports = (sequelize, dataTypes) => {
    const alias = 'User';

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
        customerCategory_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        password: {
            type: dataTypes.STRING
        }
    }
    const config = {
        underscored: true,
        tableName: "User"
    }

    const Customer = sequelize.define(alias, cols, config)

    Customer.associate = (models) => {
        Customer.belongsTo(models.CustomerCategory, {
            as: "UsersCategory",
            foreignKey: "UsersCategory_id"
        })
    }

    return Customer;

}