const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    pfp: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    display_name: {
        type: String,
        required: true
    },
    payment_links: {
        type: Array,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_listings: {
        type: Array,
        required: false
    },
    saved_listings: {
        type: Array,
        required: false
    }
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = {
    Account
}