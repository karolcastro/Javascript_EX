const prompt = require("prompt-sync")();
 
const cotacao = prompt("Digite a cotação do dolár (U$) de hoje em reais (R$)");
const conversao = prompt("Digite o valor em reais (R$) para conversão ");

const cotacao_dolar = cotacao * conversao;

if (cotacao > conversao) {
    prompt( `O valor total em reais é de: R$ ${cotacao_dolar} `)        
}else{
    prompt("Cotação do dolar (U$) maior que o valor para conversão")
}