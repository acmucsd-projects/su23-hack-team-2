console.log('Loading posts router...');

const express = require('express');
const {
    newPost,
    getPost,
    getPosts,
    deletePost, 
    getPostsByUsername, 
} = require('../controllers/postController')

const Post = require('../models/post');
const router = express.Router();

// GET all posts 
router.get('/', getPosts);

// GETs all posts by users 
router.get('/', getPostsByUsername);

// GET a single post 
router.get('/:id', getPost);

// POST a new post 
router.post('/', newPost);

// DELETES a post 
router.delete('/:id', deletePost);

module.exports = router;