var liga = document.getElementById('liga');
var desliga = document.getElementById ('desliga');

function on() {
    document.getElementById('img').src="./ligada.png";
}

function off() {
    document.getElementById('img').src='./desligada.png'
}



desliga.onclick=off;