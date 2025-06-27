const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        default: 0
    },
    bgcolor:{
        type: String
    },
    panelcolor:{
        type: String,
    },
    textcolor:{
        type: String,
    },
});

const product = mongoose.model('product',productSchema);
module.exports = product;