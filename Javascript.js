
let reloj = new Date();
let hora = reloj.getHours();
let minutos = reloj.getMinutes();
let segundos = reloj.getSeconds();

document.getElementById("clock").innerHTML = hora+":"+minutos+":"+segundos;
