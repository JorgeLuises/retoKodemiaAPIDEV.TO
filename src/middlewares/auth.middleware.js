//Creación de middleware de accesso a DEV.TO
const createError = require('http-errors');
const jwt = require('../lib/jwt');
const userUsecase = require('../usecases/user.usecase');

async function auth (request, response, next) {
    try {
        const token = request.headers.authorization;

        if (!token) throw createError (401, 'Token is required for this request');

        const payload = jwt.verify(token);

        const user = await userUsecase.getUserById(payload.id);

        request.user = user;

        next();
    } catch (error) {
        response.status(401);

        response.json({
            success: false,
            error: error.message
        });
    }
};

module.exports = auth;