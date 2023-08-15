
const { users, posts } = require("../db"); //ese users los traemos de la db
const axios = require("axios");


const cleanArray = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      email: elem.email,
      phone: elem.phone,
      created: false,
    };
  });
  return clean;
};

const createUserDB = async (name, email, phone) => {
  return await users.create({ name, email, phone });
};

const getUserById = async (id, source) => {
  const response =
    source === "api"
      ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
          .data
      : await users.findByPk(id, {
        include:{// este include lo traemos de equelize
          model: posts,
          attributes: ["title", "body"]
        }
      });//el segunto argumento vamos a colocar 
  return response;
};

const searchUserByName = async (name) => {
  const databaseUsers = await users.findAll({where: { name:name } });
  
   //tiene que buscar en api
   const apiUsersRaw = (
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
  ).data;

  //Limpiando la infromacion que viene de la "api"
  const apiUsers = cleanArray(apiUsersRaw);

  const filteredApi = apiUsers.filter((users) => {
    return users.name.toLowerCase() === name.toLowerCase();
  });

  return [...databaseUsers, ...filteredApi]

};

const getAllUsers = async () => {
  //tiene que buscar en bbd
  const databaseUsers = await users.findAll();

  //tiene que buscar en api
  const apiUsersRaw = (
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
  ).data;

  //Limpiando la infromacion que viene de la "api"
  const apiUsers = cleanArray(apiUsersRaw);

  //tiene que unificar la informacion
  return [...databaseUsers, ...apiUsers];
};


module.exports = {
  createUserDB,
  getUserById,
  searchUserByName,
  getAllUsers,
};
