const prompt = require("prompt-sync")();

var base = 3;
var contador = 0;
var potencia = 0;

while (contador <=15) {
    potencia = base * contador

prompt(`A potencia é: ${potencia}`)
    contador += 1
}
//prompt(`A potencia é: ${potencia}`)
