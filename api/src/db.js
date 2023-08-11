const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
);

//modelos de sequelize. min 34 repaso

sequelize.define("users",{
  id:{ 
    type: DataTypes.UUID, // ejemplo: jhas4-kjlksafj-lkjlkj
    primaryKey:true,
    defaultValue:DataTypes.UUIDV4
  },

  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },

  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true //esto nos verifica que el correo que se esta ingresando sea unico
  },

  phone:{
    type:DataTypes.INTEGER,
    allowNull:false,
  }

},{timestamps:true}
);

module.exports = {
  conn: sequelize //se debe importar en el index
}