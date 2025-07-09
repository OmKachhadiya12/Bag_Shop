const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('./../utils/generateToken'); 
const userModels = require('./../models/userModels');


module.exports.registerUser = async(req,res) => {
     try{
        let {email,password,fullName} = req.body;

        let emailExist = await userModels.find({email: email});
        if(emailExist) return res.status(401).send('You already have an account!!');

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash('password',salt);
        let user = await userModels.create({
            fullName,
            email,
            password: hashedPassword
        })

        let token = generateToken(user);
        res.cookie('token',token);
        res.send('User created!!');
    }catch(err){
        res.send(err.message);
    }
}

module.exports.loginUser = async(req,res) => {
    try{
        let {email,password} = req.body;

        let user = await userModels.find({email: email});
        if(!user) return res.send('Email or Password is in correct!');

        bcrypt.compare(password,user.password,(err,result) => {
            if(result){
                let token = generateToken(user);
                res.cookie('token',token);
                res.send('You have logged in!!');
            }
            else{
                return res.send('Email or Password is in correct!')
            }
        })
    }catch(err){
        res.send(err.message);
    }
    
} 