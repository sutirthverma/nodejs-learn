const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: 'String',
        unique: true
    },

    email: {
        type: 'String',
        unique: true
    },

    password: {
        type: 'String',
    },
}, {timestamps: true});

const User = new mongoose.model('users', userSchema);

module.exports = User;