const socket = io();
const subBtn = document.getElementById('submitBtn');
const queryText = document.getElementById('query')

subBtn.addEventListener('click',sendMessage )


function sendMessage(){
    if(validateField){
        socket.emit('data', queryText.value)
        
        clearField();
    }
}

function clearField(){
    if (queryText != "") {
        queryText.value = ""
    }
}

function validateField(){
    if(queryText.value === '' || queryText,value === 'undefined' || queryText.length == 0){
        return false
    }else {
      return true
    }
}

socket.on('message', (msg)=>{
    console.log(msg);
    
})