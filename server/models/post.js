const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    liked: {
        type: Boolean,
        required: true
    },
    likes: {
        type: Number,
        required: true
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = {
    Post
}