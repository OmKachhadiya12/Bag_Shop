const jwt = require('jsonwebtoken');
const userModels = require('./../models/userModels');

module.exports = async (req,res) => {
    if(!req.cookie.token){
        req.flash('Error','You need to Login first');
        return res.redirect('/');
    }

    try{
        let decoded = jwt.verify(req.cookie.token,'secretKey');
        let user = await userModels.find({email: decoded.email}).select('-password');

        req.user = user;
        next();
    }catch(err){
        req.flash('Error','Spmething went wrong!!!');
        res.redirect('/');
    }
}