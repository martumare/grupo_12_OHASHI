const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const alias = "Users";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    tableName: "Users",
    timestamps: false,
  };

  const Users = sequelize.define(alias, cols, config);
  return Users;
};
