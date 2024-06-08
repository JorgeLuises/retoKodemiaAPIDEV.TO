//Creación de casos de uso para los Posts
const Posts = require('../models/post.model');

async function createPost (postData) {
    const newPost = Posts.create(postData);
    return newPost;
};

async function editPost (id, newData) {
    const postUpdated = await Posts.findByIdAndUpdate(id, newData, {new: true});
    return postUpdated;
};

async function deletePost (id) {
    const deletedPost = await Posts.findByIdAndDelete(id);
    return deletePost;
};

async function getFilterPosts () {
    const filterPosts = await Posts.find().populate("Users");
    return filterPosts;
}

module.exports = {
    createPost,
    editPost,
    deletePost,
    getFilterPosts
};