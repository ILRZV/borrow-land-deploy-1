const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Replies = sequelize.define("Replies", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, defaultValue: '-' },
  telegram: { type: DataTypes.STRING, defaultValue: '-' },
  viber: { type: DataTypes.STRING, defaultValue: '-' },
  whatsapp: { type: DataTypes.STRING, defaultValue: '-' },
  facebook: { type: DataTypes.STRING, defaultValue: '-' },
  vkontakte: { type: DataTypes.STRING, defaultValue: '-' }
});

module.exports = Replies;
