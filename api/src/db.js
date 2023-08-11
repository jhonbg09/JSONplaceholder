const { Sequelize } = require("sequelize");
require("dotenv").config();

const usersModels = require('./models/usersModels');
const postsModels = require('./models/postsModels');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{ logging:false }
);

//Defincion de modelos a usar
usersModels(sequelize);
postsModels(sequelize);

//Crear las relaciones //asociaciones

const {users, posts} = sequelize.models

//Un usuario puede tenr muchos posts
users.hasMany(posts);

//Un posts puede tener solo un usuario
posts.belongsTo(users);



module.exports = {
  ...sequelize.models,
  conn: sequelize //se debe importar en el index
}