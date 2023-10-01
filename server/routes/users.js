const express = require('express');
const router = express.Router();

const Post = require('../models/post');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = {
    name: 'ACM Hack',
    email: 'hack@acmucsd.org'
  }
  res.status(200).json({ user });
});

router.get('/post', async (req, res) => {
  const posts = await Post.find().exec();
  res.status(200).json({posts});
});

router.post('/post', async (req, res) => {
  const { post } = req.body;
  const {username, price, description, picture, categories, liked, likes } = post;
  if (!username || !price || !description || !picture || !categories || !liked || !likes) {
      res.status(400).json({error: 'Invalid Input!'});
  } else{
      const newPost = await Post.create(post);
      res.status(200).json({newPost});
  }
});

module.exports = router;
