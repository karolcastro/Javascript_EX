const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const nota1 =  parseFloat(prompt("Digite a nota da primeira prova: "));
const nota2 =  parseFloat(prompt("Digite a nota da segunda prova: "));
const nota3 =  parseFloat(prompt("Digite a nota da terceira prova: "));

var media = (nota1 + nota2 + nota3)/3;
media.toFixed(2)

if (media >= 7.0) {
    prompt(`${nome}, Você esta aprovado! Sua média foi: ${media}` );
}
if (media >= 5.0 && media < 7.0) {
   prompt(`${nome}, Você esta de recuperacao! Sua média foi: ${media}`);
}
if (media < 5.0) {
    prompt(`${nome}, Você não passou! Sua média foi: ${media}`);
}
