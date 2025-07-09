const express = require('express');
const router = express.Router();
const ownerModels = require('./../models/ownerModels');

if(process.env.NODE_ENV === 'development'){
    router.post('/create',async(req,res) => {
        const owners = await ownerModels.find();
        if(owners.length > 0){
            return res.status(503).send('You cannot create more Owners.');
        }
        let {fullName,email,password} = req.body;
        
        let createdOwner = await ownerModels.create({
            fullName,
            email,
            password
        })
        res.send(createdOwner);
    })
}

router.get('/admin',(req,res)=>{
    let sucess = req.flash('sucess')
    res.render('createproducts',{sucess});
})

module.exports = router;