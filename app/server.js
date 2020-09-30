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

var users = []
var ids

app.get('/', (req, res)=>{
    res.render('model')
})


app.post('/', (req, res) =>{
    var user = req.body['user-name']
    var room = req.body['chat-room']

    if(user != "" && room != ""){
        var myUser = {
            uId: ids,
            name: user,
            room: room
        }
        users.push(myUser)
        res.redirect('/chat')
        console.log(users);
        
    }
    
})

app.get("/chat", (req, res) =>{
    res.render("index")
})

io.on('connect', (data)=>{
    console.log("server connected");
    

})


io.on('connection', (socket)=>{
    ids = socket.id
    

    socket.on("data", msg =>{
        console.log(msg);
        
    })

    socket.on("disconnect", (e)=>{
        if(e){
            users.forEach(user => {
                if (user.uId == ids) {
                    
                    delete users[user]



                }
                console.log(users);
                
            })
        }
        
    })
    

})





// server listening
server.listen('3000', ()=>{
    console.log("port:3000");
    
})
