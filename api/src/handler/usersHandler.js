
const userHandler = (req, res) => {
    const {name, phone} = req.query; 
    if(name && phone) res.status(200).send(`informacion de usuario: ${name} contacto: ${phone}`);
    res.status(200).send("Devuelvo todos los usuarios");
  
};

const detailHandler = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Detalles del usuario ${id}`);
};

const createUsers = (req, res) => {
    const {name, email, phone}= req.body

  res.status(200).send(`Bienvenido ${name}, su contacto es: ${phone}, correo: ${email}`);
};

module.exports = {
  userHandler,
  detailHandler,
  createUsers,
};
