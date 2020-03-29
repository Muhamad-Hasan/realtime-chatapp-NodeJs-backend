const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = "mongodb+srv://Mhassan:artificial.intelligence@cluster0-2bd7c.mongodb.net/chatApp?retryWrites=true&w=majority";
const connect = mongoose.connect(uri, { useNewUrlParser: true });

const user = require('./controllers/userRoutes');
const chat = require('./controllers/chatRoutes');
var cors = require('cors')

app.use(cors());
connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });
//app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/user' , user);
app.use('/chat' , chat);


module.exports = app
