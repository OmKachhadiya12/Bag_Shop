const express = require('express');
const router = express.Router();
const isLoggedIn = require('./../middleware/isLoggedIn');
const productModel = require('./../models/productModels');


router.get('/',(req,res) => {
    let error = req.flash('Error');
    res.render('index',{error});
})

router.get('/shop',isLoggedIn,async(req,res) => {
    try{
        let products = await productModel.find();
        res.render('shop',{products});
    }catch(err){
        res.send(err.message);
    }
});

module.exports = router;