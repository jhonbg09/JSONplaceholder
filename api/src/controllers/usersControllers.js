const { users } = require('../db') //ese users los traemos de la db

const createUserDB = async(name, email, phone) =>{ 
    return await users.create({name, email, phone});
};

module.exports = {createUserDB};