// 05- Escreva um programa que receba dois números inteiros
// e imprima o resultado da exponenciação de um pelo outro
// Não vale usar o operador de exponenciação (**) ou a função Math.pow()

let base = parseInt(process.argv[2]);
let expoente = parseInt(process.argv[3]);
let exponenciacao = 1;
let contador = 0;

while(contador < expoente){
    exponenciacao *= base
    contador++
}

console.log(base + " elevado a  " + expoente + " é igual a:  "+ exponenciacao);
