const Post = require('../models/post');
const Account = require('../models/account');
const mongoose = require('mongoose')

// get all posts 
const getPosts = async (req, res) => {
    const post = await Post.find({}).sort({
        createdAt: -1
    })
    res.status(200).json(post)
}

// get singular post 
const getPost = async (req, res) => {
    const {
        id
    } = req.params
    const post = await Post.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'No such post'
        })
    }
    if (!post) {
        return res.status(404).json({
            error: 'No such post'
        })
    }
    res.status(200).json(post)
}

const newPost = async (req, res) => {
    const {
        username,
        price,
        date,
        description,
        picture, 
        categories, 
        liked,
        likes
    } = req.body
    // this adds a post document to DB ! 
    try {
        const userId = mongoose.Types.ObjectId(username);
        // Check if referenced User document exists
        const userExists = await Account.findById(userId);
        if (!userExists) {
            throw new Error('User does not exist');
        }

        const post = await Post.create({
            username: userId,
            price,
            date,
            description,
            picture, 
            categories, 
            liked,
            likes
        })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}


// delete a post 
const deletePost = async (req, res) => {
    const {
        id
    } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'No such post'
        })
    }
    const post = await Post.findOneAndDelete({
        _id: id
    })
    if (!post) {
        return res.status(400).json({
            error: 'No such post'
        })
    }
    res.status(200).json(post)
}

// GET posts by username 
const getPostsByUsername = async (req, res) => {
    const {
        username
    } = req.params
    const posts = await Post.findById(username)

    if (!mongoose.Types.ObjectId.isValid(username)) {
        return res.status(404).json({
            error: 'No posts by the specified user'
        })
    }
    if (!posts) {
        return res.status(404).json({
            error: 'No posts by the specified user'
        })
    }
    res.status(200).json(posts)
}

module.exports = {
    newPost,
    getPost,
    getPosts,
    deletePost, 
    getPostsByUsername, 
}