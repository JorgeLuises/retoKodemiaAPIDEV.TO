//Creación de ruta de inicio de sesion para usuario
const express = require ('express');
const authUsecase = require ('../usecases/auth.usecase');

const route = express.Router();

route.post('/login', async (request, response) => {
    const {email, password} = request.body;
    const token = await authUsecase.login(email, password);

    try {
        response.json({
            success: true,
            data: {token}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

module.exports = route;