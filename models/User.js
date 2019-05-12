const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        minlength: 6,
        maxlength: 256,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 1024
    },
    facebookId: Number,
    googleId: Number
})

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = {
        email: Joi.string().min(6).max(256).email().required(),
        password: Joi.string().min(6).max(1024).required()
    }

    return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validateUser;