
const {  createPostsDB } = require('../controllers/postsControllers')

const postsHandler = (req, res) => {
  res.status(200).send("Estoy consultando los posts");
};

const createPostsHandler = async (req, res) => {
  const {title, body, userId} = req.body;
  try {
    const newPost = await  createPostsDB(title, body, userId);
    res.status(201).json(newPost);//el status 201 nos indica que ha sido creado correctamente el post para este ejemplo
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPostsHandler,
  postsHandler
};
