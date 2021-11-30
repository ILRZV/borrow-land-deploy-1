const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  "stage",
  "postgres",
  "secret",
  {
    dialect: "postgres",
    host: "3.121.233.79",
    port: 5432,
  }
);
