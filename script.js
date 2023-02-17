const lamp = document.getElementById('lamp')
const hiddenButtons = document.querySelector('.divBotoes')


function acender(){
    lamp.src = './images/acesa.jpg'
}

function apagar(){
    lamp.src = './images/apagada.jpg'
}

function quebrar(){
    lamp.src = './images/quebrada.jpg' 
    hiddenButtons.style.display = 'none'    
   
}














