const {posts} = require('../db')

const createPostsHandlerDB = async (title, body) =>{
    return await posts.create({title, body});
}

module.exports = {
    createPostsHandlerDB
}
