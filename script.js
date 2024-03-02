var aniversary = new Date("26 Nov, 2021");
var now = new Date();
var difftime = now - aniversary;
var diffdays = Math.round(difftime / (1000 * 24 * 60 * 60));
document.getElementById("time").innerHTML += `${diffdays}`;
