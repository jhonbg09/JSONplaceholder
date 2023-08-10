const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.status(200).send("aqui estan todos los usuarios");
});

usersRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Detalles del usuario ${id}`);
});

usersRouter.post("/", (req, res) => {
  res.status(200).send("Estoy creando un nuevo usuario");
});

module.exports = usersRouter;
