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