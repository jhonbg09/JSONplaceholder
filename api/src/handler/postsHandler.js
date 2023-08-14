
const {  createPostsHandlerDB } = require('../controllers/postsControllers')

const postsHandler = (req, res) => {
  res.status(200).send("Estoy consultando los posts");
};

const createPostsHandler = async (req, res) => {
  const {title, body} = req.body;
  try {
    const response = await  createPostsHandlerDB(title, body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPostsHandler,
  postsHandler
};
