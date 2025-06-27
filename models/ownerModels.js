const mongoose = require('mongoose');
const product = require('./productModels');

const ownerSchema = new mongoose.Schema({
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
    product:{
        type: Array,
        default: []
    },
    picture:{
        type: String
    },
    gstNo:{
        type: String
    }
});

const owner = mongoose.model('owner',ownerSchema);
module.exports = owner;