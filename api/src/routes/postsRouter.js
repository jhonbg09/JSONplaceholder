const { Router } = require("express");

const postsRouter = Router();

postsRouter.post("/", (req, res) => {
  res.status(200).send("Estoy creando un posts");
});

module.exports = postsRouter;
