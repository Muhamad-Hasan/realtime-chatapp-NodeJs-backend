const express = require("express");
const mongoose = require('mongoose');
const User = require('../model/user');
const router = express.Router();

router.post('/' , async (req , res)=>{
    let user =new User(req.body);
    user.save();
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(user);
});

router.get('/' , async (req , res)=>{
    let user = await User.find();
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(user);
});

module.exports = router;