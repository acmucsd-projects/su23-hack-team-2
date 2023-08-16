const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user'); 
const Listing = require('../models/listing'); 
const SavedListing = require('../models/savedListing'); 

const router = express.Router();

// Route for creating a new user account
router.post('/createAccount', async (req, res) => {
  try {
    const { profilePicture, displayName, paymentLinks, bio, email, password } = req.body;

    // Check if the email is from UCSD domain (example: @ucsd.edu)
    if (!email.endsWith('@ucsd.edu')) {
      return res.status(400).json({ error: 'Only UCSD email addresses are allowed' });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Hash the password before storing 
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      profilePicture,
      displayName,
      paymentLinks,
      bio,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create account' });
  }
});

// Route for getting account information
router.get('/accountInfo/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user based on the provided user ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userListings = await Listing.find({ userId });
    const savedListings = await SavedListing.find({ userId });

    const { password, ...accountInfo } = user.toObject();

    accountInfo.userListings = userListings;
    accountInfo.savedListings = savedListings;

    res.status(200).json(accountInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch account information' });
  }
});

module.exports = router;
