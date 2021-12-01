const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  "stage",
  "postgres",
  "secret",
  {
    dialect: "postgres",
    host: "3.120.26.104",
    port: 5432,
  }
);
