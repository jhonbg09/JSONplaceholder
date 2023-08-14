const { posts } = require("../db");

const createPostsDB = async (title, body, userId) => {
  const newPost = await posts.create({ title, body });
  await newPost.setUser(userId); //set user es un metodo de sequilize que nos genera la clave foranea;
  return newPost;//para aclarar en clase 3 de repaso jorge vega min 1:13:00
};

module.exports = {
  createPostsDB,
};
