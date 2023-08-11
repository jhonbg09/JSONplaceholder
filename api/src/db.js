const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
);



module.exports = {
  conn: sequelize //se debe importar en el index
}