const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: Number.isInteger,
            message: '{value} is not a integer'
        } 
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema); 