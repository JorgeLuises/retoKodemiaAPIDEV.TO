const mongoose = require('mongoose');

const modelName = 'Posts';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100
    },
    image: {
        type: String,
        required: false,
        minLength: 2,
        maxLength: 10000
    },
    body : {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 10000
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    tags : {
        type: [String],
        required: false,
        default: [""]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    postedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(modelName, schema);