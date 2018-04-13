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

function sumar(){
    var numero1=document.getElementById("numero1").value;/*value para que nos devuelva el valor en numero*/
    var numero2=document.getElementById("numero2").value;
    document.getElementById("resultado").value=parseInt(numero1)+parseInt(numero2);/*parseInt para numero enteros*/
  }
function restar(){
    var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    document.getElementById("resultado").value=parseInt(numero1)-parseInt(numero2);
  }
function multiplicar(){
    var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    document.getElementById("resultado").value=parseInt(numero1)*parseInt(numero2);
  }
 function dividir(){
    var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    document.getElementById("resultado").value=parseInt(numero1)/parseInt(numero2);
  }
function potencia(){
    var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    document.getElementById("resultado").value=parseInt(numero1)**parseInt(numero2);
}
function parimpar(){
     var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    document.getElementById("resultado").value=parseInt(numero1)/parseInt(numero2);
    
    document.getElementById("resultado").value=parseInt(numero1)/parseInt(numero2);
}

function muestracoches(){
    var coches=["renault","citroen", "bmw", "mini"];
    var texto="<ul>";
    for(i=0;i<coches.length;i++){
        texto=texto+"<li>"+coches[i]+"</li>";
    }
    texto +="</ul>";
    document.getElementById("listadocoches").innerHTML=texto;
}

/*function muestranotas(){
    var notas=["3","8","7","5","4.5","9","8","7","8.5","6";"10","7","7.5"];
    var texto="<ul>";
    for(i=0;i<notas.length;i++){
        texto=texto+"<li>"+notas[i]+"</li>";
        
        if(notas<5){
            texto +="</ul>";
            document.getElementById("listadonotas").innerHTML=texto;  
        }
        
          if(notas>=5 && notas<=6){
             texto +="</ul>";
            document.getElementById("listadonotas").innerHTML=texto;  
        }
        
          if(notas>6 && notas<=7){
           texto +="</ul>";
          document.getElementById("listadonotas").innerHTML=texto;  
        }
        
          if(notas>7 && notas<=8.5){
           texto +="</ul>";
          document.getElementById("listadonotas").innerHTML=texto;  
        }
        
          if(notas>=8.5 && notas<=10){
           texto +="</ul>";
          document.getElementById("listadonotas").innerHTML=texto;  
        }
        
          if(notas==10){
           texto +="</ul>";
          document.getElementById("listadonotas").innerHTML=texto;  
        }
    }
}*/

function mostrarempleados(){
    var empleados=[{nombre:"marta",sueldo:1000,horas:50},
                   {nombre:"javier",sueldo:3300,horas:100},
                   {nombre:"pepe",sueldo:800,horas:100},
                   {nombre:"sandra",sueldo:950,horas:95},
                   {nombre:"teresa",sueldo:2700,horas:90}
                ];
    var sueldoprueba=1000000000;
    var horasprueba=0;
    var sueldomedio=0;
    var texto="";
    
    for(i=0;i<empleados.length;i++){
        
        if(empleados[i].sueldo<sueldoprueba){
            sueldoprueba=empleados[i].sueldo;
            //alert("sueldo "+sueldoprueba);
        }
       //alert(empleados[i]);
        if(empleados[i].horas>horasprueba){
            horasprueba=empleados[i].horas;
              //alert("horas" +horasprueba);
        }
        sueldomedio=sueldomedio+empleados[i].sueldo;
    }
    
    sueldomedio=sueldomedio/empleados.length;
    
    texto= texto+"sueldoprueba"+sueldoprueba+ " horasprueba"+horasprueba+ " sueldomedio"+ sueldomedio;//esto es lo que sale por pantalla
    var resultado=document.getElementById("resultado");//la variable resultado ha de llamarse igual que en el html, para que salga en pantalla
    resultado.innerHTML=texto;
     //alert("media" +sueldomedio);
}   
    

    
  