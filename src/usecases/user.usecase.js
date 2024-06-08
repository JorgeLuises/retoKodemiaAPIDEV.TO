//Caso de uso de un usuario
const createError = require('http-errors');
const Users = require('../models/user.model');
const encrypt = require('../lib/encrypt');

async function createUser (userData) {
    const userFound = await Users.findOne({email: userData.email});

    if(userFound) throw createError(409, 'Email already registered');

    userData.password = await encrypt.encrypt(userData.password);

    const newUser = await Users.create(userData);
    return newUser;
};

async function getUserById (id) {
    const user = await Users.findById(id);
    return user;
};

module.exports = {
    createUser,
    getUserById
};