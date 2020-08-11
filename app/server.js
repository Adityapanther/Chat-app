const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const socket = require('socket.io');
const ejs = require('ejs');

// init
const app = express();
const server = http.createServer(app)
const io = socket(server)

// public folder init
app.use(express.static(path.join(__dirname , "public")));

// init ejs template
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/templates'))
// body-parser init
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('model')
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
})





// server listening
server.listen('3000', ()=>{
    console.log("port:3000");
    
})
