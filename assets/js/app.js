var btnTweet = document.getElementById('tweet');
var boxComment = document.getElementById('box-comment');
var caracteres = 140;
var contador = document.getElementById('contador');
var numContador = document.createTextNode(caracteres);

contador.appendChild(numContador);

var comment = document.getElementById('comment');

comment.addEventListener('keyup', function() {
    var newChar = caracteres - document.getElementById('comment').value.length;
    var newContador = document.createTextNode(newChar);
    contador.innerHTML = newContador.textContent;

   
    if (newContador.textContent < 0) {
        document.getElementById('tweet').disabled = true;
    } else {
        document.getElementById('tweet').disabled = false;
    } 
       
    if (newContador.textContent <= 20 && newContador.textContent > 10) {
        contador.classList.add('green');
        contador.classList.remove('red');
    }
    
    if (newContador.textContent < 10 && newContador.textContent >= 0) {
        contador.classList.add('red');
        contador.classList.remove('green');
        
    }
})

btnTweet.addEventListener('click', function() {
   
    var comment = document.getElementById('comment').value;

    document.getElementById('comment').value = '';
    
    var boxNew = document.getElementById('post');
    
    var newComment = document.createElement('div');

    if (comment.length == 0 || comment == null) {
        document.getElementById('tweet').disabled = true;
        return false;
    }
    
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getUTCMinutes();
    if(hour < 10){
       hour= "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    
    var mensage = document.createElement('textarea');
    var txtMensage = document.createTextNode(comment);

    
    var hora = document.createElement('p');
    var txtHora = document.createTextNode(hour + ':' + minute + ' hs');

    mensage.appendChild(txtMensage);
    hora.appendChild(txtHora);
    newComment.appendChild(mensage);
    newComment.appendChild(hora);

    boxNew.appendChild(newComment);

})

