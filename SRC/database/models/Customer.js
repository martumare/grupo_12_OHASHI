module.exports = (sequelize, dataTypes) => {
    const alias = 'Customer';

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
        phone_number: {
            type: dataTypes.STRING
        }, 
        customerCategory_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        }
    }
    const config = {
        underscored: true,
        tableName: "customer"
    }

    const Customer = sequelize.define(alias, cols, config)

    Customer.associate = (models) => {
        Customer.belongsTo(models.CustomerCategory, {
            as: "customerCategory",
            foreignKey: "customerCategory_id"
        })
    }

    return Customer;

}