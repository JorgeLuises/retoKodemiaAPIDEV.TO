//Creación de end-points para el usuario
const express = require('express');
const userCase = require('../usecases/user.usecase');

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const userCreated = await userCase.createUser(request.body);

        response.json({
            success: true,
            data: { user: userCreated }
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const userFound = await userCase.getUserById(id);

        response.json({
            success: true,
            data: {userFound}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;