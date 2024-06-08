//Casos de uso para la autorización de usuario (login del usuario)
const jwt = require('../lib/jwt');
const encrypt = require('../lib/encrypt');
const createError = require('http-errors');
const Users = require('../models/user.model');

async function login (email, password) {
    const user = await Users.findOne({email: email});

    if (!user) throw createError (401, 'Invalid email');

    const validPassword = await encrypt.compare(password, user.password);

    if (!validPassword) throw createError(401, 'Invalid password');

    const token = await jwt.sign({id: user._id});

    return token;
};

module.exports = {login};