
function CalcularIMC(altura, peso) 
{
  altura = Math.round(altura) / 100;
  peso = Math.round(peso);
  var indice = (peso / Math.pow(altura, 2));
  var resultado = "";
  return "Su IMC es: " + indice.toFixed(2);
}
function MostrarResultadoIMC (altura, peso, indice)
{
  var mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;
  alert (mensaje);
}	
var altura = parseInt(prompt("Indique su altura en centímetros:", ""));
var peso = parseInt(prompt("Indique su peso en kilógramos:", ""));
var resultado = CalcularIMC(altura, peso);
MostrarResultadoIMC(altura, peso, resultado);  