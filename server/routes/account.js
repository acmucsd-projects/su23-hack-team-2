console.log('Loading users router...');

const express = require('express');
const {
  createAcc,
  getAcc,
  updateAcc,
  uploadPicture
} = require('../controllers/accountController')

const Account = require('../models/account');
const router = express.Router();

// GET all users 
router.get('/', getAcc);

// GET a single user 
router.get('/:id', getAcc);

// POST a new user 
router.post('/', createAcc);

// UPDATES a user 
router.patch('/:id', updateAcc);

// upload image 
router.put("/:id/image", storage.single("image"), uploadPicture) 

module.exports = router;