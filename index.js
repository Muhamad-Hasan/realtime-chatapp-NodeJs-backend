const express = require('express');
const app = express();

const APP = require('./app');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.json());




io.on('connection', function (socket) {
	console.log("user connected");
	socket.on('post' , async(data)=>{
		//let post = await Post.find(); 
		socket.broadcast.emit('update', post)
	})
	socket.on('comment' , async(data)=>{
		// let post = await Post.find(); 
		// console.log("post" , post)
		socket.broadcast.emit('update', post)
	})
	socket.on('react' , async(data)=>{
		// let post = await Post.find(); 
		// console.log("post" , post)
		socket.broadcast.emit('update', post)
	})
		
 })
app.use(APP);
http.listen(process.env.PORT || 3000, () => {
	console.log(`Server is running `, (process.env.PORT || 3000));
});
