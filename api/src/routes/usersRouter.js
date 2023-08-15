const { Router } = require("express");
const {
  userHandler,
  detailHandler,
  createUsers,
} = require("../handler/usersHandler");

const usersRouter = Router();

const validateUser = (req, res, next) => {
  //hacemos validacion de alguno de los datos que nos estan pasando
  const { name, email, phone } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!email) return res.status(400).json({ error: "Missing email" });
  if (!phone) return res.status(400).json({ error: "Missing phone" });
  next();
};

usersRouter.get("/", userHandler);

usersRouter.get("/:id", detailHandler);

usersRouter.post("/", validateUser, createUsers);

module.exports = usersRouter;
