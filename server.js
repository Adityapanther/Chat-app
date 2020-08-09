var app = require('express')();

var http = require('http');
var server = http.createServer(app);
// var io = require('socket.io').listen(server);

// socket.on('connection', (socket)=>{
// console.log("user");

// })

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});


server.listen('3000', ()=>{
    console.log("port listening..");
    
});