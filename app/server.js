const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const socket = require('socket.io');

// init
const app = express();
const server = http.createServer(app)
const io = socket(server)

// public folder init
app.use(express.static(path.join(__dirname , "public")));
// body-parser init
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('index.html')
})

io.on('connect', ()=>{
    console.log("server connected");
    
})

io.on('connection', (socket)=>{
    socket.on('data', (msg) =>{
        socket.broadcast.emit("message", msg)
    })
    console.log("new user Connected");
    socket.broadcast.emit("message", "new user joined us")

    socket.disconnected({
        
    })
})





// server listening
server.listen('3000', ()=>{
    console.log("port:3000");
    
})
