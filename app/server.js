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

app.get('/', (rq, res)=>{
    res.render('<h1>hi, Aditya</h1>')
})

io.on('connection', (socket)=>{
    console.log("new user Connected");
    
})




// server listening
server.listen('3000', ()=>{
    console.log("port:3000");
    
})
