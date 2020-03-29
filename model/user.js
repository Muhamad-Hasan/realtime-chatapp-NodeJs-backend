const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name : {
        type:String,
        required:true
    },
    profile : {
        type:String,

    },
    last_seen:{
        type:Date
    } 
});

module.exports = mongoose.model("user" , user);