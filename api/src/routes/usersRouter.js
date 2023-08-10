const { Router } = require("express");
const {userHandler, detailHandler, createUsers} = require('../handler/usersHandler')

const usersRouter = Router();

usersRouter.get("/", userHandler);

usersRouter.get("/:id", detailHandler);

usersRouter.post("/", createUsers);

module.exports = usersRouter;
