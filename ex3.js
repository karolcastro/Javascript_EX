const prompt = require("prompt-sync")();

const valorA = prompt("Digite o valor de A: ");
const valorB = prompt("Digite o valor de B: ");


    const divisao = (valorA / valorB);
    const multiplicacao = (valorA * valorB);
    const adicao = (valorA + valorB);
    const subtracao = (valorA - valorB);

    if (valorA >= valorB || valorA == valorB || valorA <= valorB) {
        prompt(`Divisão de A e B é: ${divisao}`);
        prompt(`Multiplicao de A e B é: ${multiplicacao}`);
        prompt(`Adição de A e B é: ${adicao}`);
        prompt(`Subtração de A e B é: ${subtracao}`)
    }
    
    else {
        prompt("Digite um número válido !")
    }