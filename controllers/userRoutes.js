const express = require("express");
const mongoose = require('mongoose');
const User = require('../model/user');
const router = express.Router();

router.post('/' , async (req , res)=>{
    console.log("userrrrrrrrrrrrrrrrr" , req.body);
    let user =new User(req.body);
    user.save();
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(user);
});

router.post('/check' , async (req , res)=>{
    let user =await User.findOne({name : req.body.name});
    if(user){
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.json(user);
    }
    else {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 500;
        res.json({error: true , message : "No user found" });
        
    }
    
});


router.get('/' , async (req , res)=>{
    let user = await User.find();
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(user);
});

module.exports = router;