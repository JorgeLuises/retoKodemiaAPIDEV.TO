//Creación de servidor
const cors = require('cors');
const express = require('express');

//Seccion de montado de rutas de la API
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const postRoute = require('./routes/post.route');
//Conexión de servidor
const server = express();

//Middlewares
server.use(cors());
server.use(express.json());

//Asignación de rutas
server.use('/users', userRoute);
server.use('/auth', authRoute);
server.use('/posts', postRoute);

server.get('/', (require, response) => {
    response.json({
        message: "API-RetoKodemiav1"
    });
});

module.exports = server;