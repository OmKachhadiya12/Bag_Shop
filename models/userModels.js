const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cart:{
        type: Array,
        default: []
    },
    orders:{
        type: Array,
        default: []
    },
    contact:{
        type: Number,
        required: true
    },
    picture:{
        type: String
    }
});

const user = mongoose.model('user',userSchema);
module.exports = user;