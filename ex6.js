const prompt = require("prompt-sync")();

const numero1 =  prompt("Digite o primeiro número: ");
const numero2 =  prompt("Digite o segundo número: ");
const numero3 =  prompt("Digite o terceiro número: ");


if (numero1 <= numero2 && numero1 <= numero3 && numero2 <= numero3){
    prompt(`A sequencia é: ${numero1} ${numero2} ${numero3}`);
}
if (numero1 <= numero2 && numero1 <= numero3 && numero3 <= numero2) {
    prompt(`A sequencia é: ${numero1} ${numero3} ${numero2}`);
}
if (numero2 <= numero1 && numero2 <= numero3 && numero1 <= numero3) {
    prompt(`A sequencia é: ${numero2} ${numero1} ${numero3}`);
}
if (numero2 <= numero1 && numero2 <= numero3 && numero3 <= numero1) {
    prompt(`A sequencia é: ${numero2} ${numero3} ${numero1}`);
}
if (numero3 <= numero1 && numero3 <= numero2 && numero1 <= numero2) {
    prompt(`A sequencia é: ${numero3} ${numero1} ${numero2}`);
}
if (numero3 <= numero1 && numero3 <= numero2 && numero2 <= numero1) {
    prompt(`A sequencia é: ${numero3} ${numero2} ${numero1}`);
}