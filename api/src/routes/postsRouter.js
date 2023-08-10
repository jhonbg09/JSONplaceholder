const { Router } = require("express");
const { createPostsHandler } = require("../handler/CreatePostsHandler");

const postsRouter = Router();

postsRouter.post("/", createPostsHandler);

module.exports = postsRouter;
