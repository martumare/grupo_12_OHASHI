module.exports = (sequelize, dataTypes) => {
  let alias = "Orders";
  let columns = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // userId: {
    //   type: dataTypes.INTEGER(11),
    //   allowNull: false,
    // },
    total: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    envio: {
      type: dataTypes.STRING(25),
      allowNull: false,
    },
    metodoPago: {
      type: dataTypes.STRING(25),
      allowNull: true,
    },
  };
  let configurations = {};

  const Order = sequelize.define(alias, columns, configurations);

  Order.associate = (models) => {
    Order.Users = Order.belongsTo(models.User, {
      as: "users",
      foreignKey: "userId",
    });
    Order.OrderItems = Order.hasMany(models.OrderItem, {
      as: "orderItems",
    });
  };

  return Order;
};