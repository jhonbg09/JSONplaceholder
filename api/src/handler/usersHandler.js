const { createUserDB, getUserById, searchUserByName, getAllUsers} = require("../controllers/usersControllers");

const userHandler = async(req, res) => {
  const { name } = req.query;
  const results = name ? await searchUserByName(name) : await getAllUsers();
  res.status(200).json(results);
};


const detailHandler = async(req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";
  try {
    const users = await getUserById(id, source)
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUsers = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const response = await createUserDB(name, email, phone); //ESTA FUNCION LA TREAMOS DE CONTROLLERS const {createUserDB} = require('../controllers/usersControllers')
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
  userHandler,
  detailHandler,
  createUsers,
};
