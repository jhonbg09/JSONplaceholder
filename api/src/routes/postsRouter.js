const { Router } = require("express");

const postsRouter = Router();

postsRouter.post("/users", (req, res) => {
  res.status(200).send("Estoy creando un nuevo usuario");
});

module.exports = postsRouter;
