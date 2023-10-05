const Account = require('../models/account');
const mongoose = require('mongoose');
const path = require('path');

// get singular user 
const getAcc = async (req, res) => {
    const {
        id
    } = req.params
    const user = await Account.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
        })
    }
    if (!user) {
        return res.status(404).json({
            error: 'No such user'
        })
    }
    res.status(200).json(user)
}

// create new user 
const createAcc = async (req, res) => {
    const {
        pfp,
        username,
        email,
        password,
        payment_links,
        listings
    } = req.body
    //req.body.image = req.file.path
    // this adds a user document to DB ! 
    try {
        const user = await User.create({
            pfp,
            username,
            email,
            password,
            payment_links,
            listings
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

// update a user  
const updateAcc = async (req, res) => {
    const {
        id
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: 'No such user'
        })
    }

    const user = await User.findOneAndUpdate({
        _id: id
    }, {
        ...req.body
    })

    if (!user) {
        return res.status(400).json({
            error: 'No such user'
        })
    }
    res.status(200).json(user)
}

// router.put("/:id/picture", storage.single("image"), async function
//UPLOAD PICTURE
const uploadPicture = async (req, res) => {
    const id = req.params.id;
    const potentialUser = await User.findById(id);
    if (!potentialUser) {
        return res.status(404).json({
            error: "User does not exist",
            id
        });
    }
    const profilePicture = await upload(req.file, id);
    const user = await User.findByIdAndUpdate(
        id, {
            image: profilePicture
        }, {
            new: true
        }
    );
    return res.status(200).json({
        user
    });
}


module.exports = {
    createAcc,
    getAcc,
    updateAcc,
    uploadPicture
}