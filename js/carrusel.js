var intervCarrusel = null;
var idxImagen = -1;

window.onload = function() {
    iniciarCarrusel();
}

function next() {
    clearInterval(intervCarrusel);
    if (idxImagen == 3) {
        idxImagen = 0;
    } else {
        idxImagen = idxImagen + 1;
    }
    console.log('índice', idxImagen);
    setImage();
    iniciarCarrusel();
}

function setImage() {
    var carrusel = document.getElementById("carrusel");
    switch (idxImagen) {
        case 0:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/abrigo.jpg' width=100% height=500/>";
            break;
        case 1:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/bolso.jpg' width=100% height=300/>";
            break;
        case 2:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/cartera.jpg' width=100% height=300/>";
            break;
        case 3:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/jean.jpg' width=100% height=300/>";
            break;
        case 4:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/polo.jpg' width=100% height=300/>";
            break;
        case 5:
            carrusel.innerHTML = "<img class='fade-in' src='images/reloj.jpg' width=100% height=300/>";
            break;
        case 6:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/ropa.jpg' width=100% height=300/>";
            break;
    }
}

function iniciarCarrusel() {
    intervCarrusel = setInterval(next, 3000);
}

function prev() {
    clearInterval(intervCarrusel);
    idxImagen = idxImagen - 1;
    console.log('índice', idxImagen);
    setImage();
    iniciarCarrusel();
}