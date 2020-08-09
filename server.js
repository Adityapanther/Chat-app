const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const socketio = require('socket.io');
const http = require('http');



// init
const app = express();
const server = http.createServer(app);
// const io = socketio.listen(server)


// body parser init
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// express init
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))


//router
app.get('/', (req, res)=>{
    res.render('index.html')
})

// io.on('connection', (socket)=>{
//     console.log("user conected");
    
// })

// server port init or listing
server.listen("3000", ()=>{
    console.log("port:3000");
    
})