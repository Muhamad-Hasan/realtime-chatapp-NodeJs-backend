const express = require("express");
const mongoose = require('mongoose');
const Chat = require('../model/chat');
const router = express.Router();

router.post('/' , async (req , res)=>{
    let chat = new Chat(req.body);
    chat.save();
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(chat);
});

router.post('/all' , async (req , res)=>{
   
    let ids = [];
    console.log("user" , req.body.user_ids);
    req.body.user_ids ? (req.body.user_ids.map(id=>{
        ids = [...ids , mongoose.Types.ObjectId(id)]
    })) : ids = []; 
    console.log("user" , ids);
    let chat = await Chat.aggregate([
        {$match : {user_ids : {$all : ids}}}
    ]) 
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(chat);
});

module.exports = router;