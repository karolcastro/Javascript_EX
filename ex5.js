const prompt = require("prompt-sync")();

const inteiro = prompt("Digite um número: ")

var antecessor = inteiro - 1;
var sucessor = inteiro + 1;

    if (inteiro > 0) {
        prompt(`O antecessor a este número é: ${antecessor}`);
        prompt(`O sucessor a este número é: ${sucessor}`)
    } else {
        prompt("Digite um número maior que 0")
    }