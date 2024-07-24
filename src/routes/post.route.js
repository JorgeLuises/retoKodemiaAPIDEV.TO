//Creación de ruta para los posts
const express = require('express');
const postUsecase = require('../usecases/post.usecase');
const userUsecase = require('../usecases/user.usecase');
const auth = require('../middlewares/auth.middleware');
const jwt = require('../lib/jwt');

const route = express.Router();

route.post('/', auth, async (request, response) => {
    try {
        const newPost = await postUsecase.createPost(request.body);

        response.json({
            success: true,
            data: {post: newPost}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message
        });
    }
});

route.patch('/:id', auth, async (request, response) => {
    try {
        const token = request.headers.authorization;
        const payload = jwt.verify(token);
        const user = await userUsecase.getUserById(payload.id);
        const idUser = user.id;

        const {id} = request.params;
        const post = await postUsecase.getPostById(id);
        const idOriginalUser = post.user._id;

        const postUpdated = await postUsecase.editPost(id, request.body, idOriginalUser, idUser);

        response.json({
            success: true,
            data: {post: postUpdated}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            succes:false,
            error: error.message
        });
    }
});

route.delete('/:id', auth, async (request, response) => {
    try {
        const token = request.headers.authorization;
        const payload = jwt.verify(token);
        const user = await userUsecase.getUserById(payload.id);
        const idUser = user.id;

        const {id} = request.params;
        const post = await postUsecase.getPostById(id);
        const idOriginalUser = post.user._id;

        const postDeleted = await postUsecase.deletePost(id, idOriginalUser, idUser);

        response.json({
            success: true,
            data: {post: postDeleted}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message
        });
    }
});

route.get('/:id', auth , async (request, response) => {
    try {
        const {id} = request.params;
        const post= await postUsecase.getPostById(id);

        response.json({
            success: true,
            data: {post}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

route.get('/', async (request, response) => {
    try {
        const search = request.query.search
        const filteredPosts = await postUsecase.getFilterPosts(search);

        response.json({
            success: true,
            data: {posts: filteredPosts}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

route.get('/', async (request, response) => {
    try {
        const allPosts = await postUsecase.getAll();
        
        response.json ({
            success: true,
            data: { allPosts}
        });
    } catch(error) {
        response.status(error.status || 500);
        response.json( {
            success: false,
            error: error.message
        });
    }
});


module.exports = route;