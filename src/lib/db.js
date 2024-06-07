//Creación de la base de datos
const mongoose = require('mongoose');

const {DB_USER, DB_NAME, DB_PASSWORD, DB_HOST} = process.env;

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect () {
    return mongoose.connect(URI);
};

module.exports = {connect};
