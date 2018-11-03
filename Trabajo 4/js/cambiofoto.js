var imagen = new Array();
var j = 0;

for (var i = 0; i < 17; i++){
    var aux = "imagenes/me-".concat((i+1).toString()).concat(".jpg");
    imagen[i] = aux;
    aux = "imagenes/me-";
}

function avanzaImagen(){
    j++;
    validaDato();
    document.getElementById("principal").src = imagen[j];
    document.getElementById("pregunta").innerHTML = pregunta[j]
}

function retrocedeImagen(){
    j--;
    validaDato();
    document.getElementById("principal").src = imagen[j];
    document.getElementById("pregunta").innerHTML = pregunta[j]
}

function validaDato(){
    if(j > imagen.length-1 || j < 0 ){
        j = 0;
    }
}
