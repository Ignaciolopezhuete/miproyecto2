/*
function mensaje(){
 document.querySelector(“#principal p:first
child”).onclick=hola;
}
*/
function hola(){
 alert('hizo clic!');
}
// window.onload=hacerclic;

function muestratexto(){
    var elemento=document.getElementById("parrafo1");
    elemento.innerHTML="Texto cambiado<strong> a negrita</strong>";
}

function concatenar(){
    var nombre=document.getElementById("nombre").innerHTML;
    var apellido=document.getElementById("apellido").innerHTML;
    document.getElementById("nombrecompleto").innerHTML=nombre+" "+apellido;
}