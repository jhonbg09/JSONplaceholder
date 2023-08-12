const { users } = require("../db"); //ese users los traemos de la db
const axios = require("axios");

const createUserDB = async (name, email, phone) => {
  return await users.create({ name, email, phone });
};

const getUserById = async (id, source) => {
  const response =
    source === "api"
      ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
          .data
      : await users.findByPk(id);
  return response;
};

const searchUserByName = async () => {

};

const getAllUsers = async () => {
  //tiene que buscar en bbd
  const databaseUsers = await users.findAll();
  //tiene que buscar en api
  const apiUsers = (
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
  ).data;
  //tiene que unificar la informacion
  return [...databaseUsers, ...apiUsers];
};
// repaso min 36 jorge vega

module.exports = {
  createUserDB,
  getUserById,
  searchUserByName,
  getAllUsers,
};
