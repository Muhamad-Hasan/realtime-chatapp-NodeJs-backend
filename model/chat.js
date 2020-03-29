const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const idSchema = new Schema({
//     user_id : {
//         type:mongoose.Types.ObjectId,
//         ref :"user"

//     }
// });

const chat = new Schema({
    // user_one : {
    //     type:String,
    //     required:true
    // },
    // user_two : {
    //     type:String,
    //     required:true
    // },
    user_ids : [{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }

    ]
    ,
    message:{
        type:String
    },
    image:{
        type:String
    },

});

module.exports = mongoose.model("chat" , chat);