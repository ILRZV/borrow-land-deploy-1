const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Request = sequelize.define("Request", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING, allowNull: false },
  startDate: { type: DataTypes.DATE, allowNull: false },
  endDate: { type: DataTypes.DATE, allowNull: false },
  picture: { type: DataTypes.STRING },
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
});

module.exports = Request;
