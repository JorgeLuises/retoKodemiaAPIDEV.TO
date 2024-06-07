//Inicialización de la API
require('dotenv').config();

const server = require('./src/server');
const db = require('./src/lib/db');
const PORT = process.env.PORT || 8080;

db.connect()
    .then(() => {
        console.log('DB connected successfully');

        server.listen(() => {
            console.log('Server running on port: ', PORT);
        });
    })
    .catch((error) => {
        console.error('DB connection error: ', error);
    });
