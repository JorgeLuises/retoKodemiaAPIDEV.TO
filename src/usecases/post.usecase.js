//Creación de casos de uso para los Posts
const Posts = require('../models/post.model');
const createError = require('http-errors');

async function createPost (postData) {
    const newPost = Posts.create(postData);
    return newPost;
};

async function editPost (id, newData, idOriginalUser, idUser) {
    if (idUser != idOriginalUser) throw createError (403, 'This user is not authorized to perform the action');
    
    const originalUser = await Posts.findById(id).populate("user");
    newData.user = originalUser.user;
    newData.postedAt = new Date;

    const postUpdated = await Posts.findByIdAndUpdate(id, newData, {new: true});
    return postUpdated;
};

async function deletePost (id, idOriginalUser, idUser) {
    if (idUser != idOriginalUser) throw createError (403, 'This user is not authorized to perform the action');
    
    const deletedPost = await Posts.findByIdAndDelete(id);
    return deletedPost;
};

async function getFilterPosts (title) {
    const query = { title: { $regex: title, $options: "i" } };
    const filterPosts = await Posts.find(query).populate("user");
    return filterPosts;
};

async function getPostById (id) {
    const postById = await Posts.findById(id).populate("user");
    return postById;
};

module.exports = {
    createPost,
    editPost,
    deletePost,
    getFilterPosts,
    getPostById
};