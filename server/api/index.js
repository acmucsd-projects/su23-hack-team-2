const express = require('express');
const Post = require('../models/post');

const router = express.Router();

router.post('/home', async (req, res) => {
    const { post } = req.body;
    const {username, price, date, description, picture, categories} = post;
    if (!username || !price || !date || !description || !picture || !categories) {
        res.status(400).json({error: 'Invalid Input!'});
    } else{
        const newPost = await Post.create(post);
        res.status(200).json({newPost});
    }
});

module.exports = router;