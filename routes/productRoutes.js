const express = require('express');
const router = express.Router();
const upload = require('./../config/multer-config');
const productModel = require('./../models/productModels');

router.post('/create',upload.single('image'),async(req,res)=>{
    try{
        let {name,price,discount,bgcolor,panelcolor,textcolor} = req.body;

        let product = await productModel.create({
        image: req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor
        })

        req.flash('sucess','Product created sucessfully!');
        res.redirect('/owners/admin');
    }catch(err){
        res.send(err.message);
    }
})

module.exports = router;