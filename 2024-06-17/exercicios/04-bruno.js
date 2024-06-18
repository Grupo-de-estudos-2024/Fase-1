// Escreva um script que receba dois números de parametro
// e mostre a soma desses números no console

let numeroUm = process.argv[2]
let numeroDois = process.argv[3]
numeroUm = parseInt(numeroUm)
numeroDois = parseInt(numeroDois)
let soma = numeroUm + numeroDois

console.log(soma)
