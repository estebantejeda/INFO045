alert("Hola");

function alertaDeSaludo(){
    alert("Hola");
}

function alertaDeDespido(){
    alert("Chao");
}

function saludoAlP(){
    for (var i = 0; i < document.getElementsByTagName("p").length; i++){
        document.getElementsByTagName("p")[i].onclick = alertaDeSaludo;
    }
}

function saludoAlDiv(){
    var arreglo = document.querySelectorAll("#Ejemplo p, hgroup");
    for (var i = 0; i < arreglo.length; i++){
        arreglo[i].onclick = alertaDeDespido;
    }
}

function run(){
    saludoAlP();
    saludoAlDiv();
}

window.onload=run;

alert("Chao");
