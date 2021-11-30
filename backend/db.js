const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  "stage",
  "postgres",
  "secret",
  {
    dialect: "postgres",
    host: "10.0.1.188",
    port: 5432,
  }
);
