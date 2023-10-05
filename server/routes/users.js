console.log('Loading users router...');

const express = require('express');
const {
  createAcc,
  getAcc,
  updateAcc,
  uploadPicture
} = require('../controllers/accountController')

const fileSizeLimitInBytes = 2 * 1024 * 1024;
const multer = require("multer");
const storage = multer({
  storage: multer.memoryStorage(),
  limits: {
      fileSize: fileSizeLimitInBytes
  },
});
const Account = require('../models/account');
const router = express.Router();

/* GET users listing. */

/*

const Post = require('../models/post');

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
*/

// GET all users 
router.get('/account', getAcc);

// GET a single user 
router.get('/:id', getAcc);

// POST a new user 
router.post('/', createAcc);

// UPDATES a user 
router.patch('/:id', updateAcc);

{/*
// upload image 
router.put("/:id/image", storage.single("image"), uploadPicture)
*/} 

module.exports = router;
