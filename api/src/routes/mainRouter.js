const {Router} = require('express');
const usersRouter = require('./usersRouter');
const postsRouter = require('./postsRouter');

const mainRouter = Router();

mainRouter.use('/', usersRouter);

mainRouter.use('/', postsRouter);

module.exports = mainRouter;



