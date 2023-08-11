const {createUserDB} = require('../controllers/usersControllers')

const userHandler = (req, res) => {
    const {name, phone} = req.query; 
    if(name && phone) res.status(200).send(`informacion de usuario: ${name} contacto: ${phone}`);
    res.status(200).send("Devuelvo todos los usuarios");
  
};

const detailHandler = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Detalles del usuario ${id}`);
};

const createUsers = async(req, res) => {
    const {name, email, phone}= req.body;
    try {
      const response = await createUserDB(name, email, phone);//ESTA FUNCION LA TREAMOS DE CONTROLLERS const {createUserDB} = require('../controllers/usersControllers')
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({error:error.message})
    }
};

module.exports = {
  userHandler,
  detailHandler,
  createUsers,
};
