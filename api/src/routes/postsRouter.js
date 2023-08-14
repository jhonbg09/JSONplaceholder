const { Router } = require("express");
const { createPostsHandler, postsHandler } = require("../handler/postsHandler");

const postsRouter = Router();

postsRouter.get("/", postsHandler);

postsRouter.post("/", createPostsHandler);

module.exports = postsRouter;
