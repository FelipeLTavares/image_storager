const database = require("../index");
const { DataTypes } = require("sequelize");

const ImageModel = database.define("images", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ImageModel;
