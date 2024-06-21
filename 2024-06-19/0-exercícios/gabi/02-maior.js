// Escreva um programa que receba dois números inteiros
// como parâmetros e imprima o maior deles.

let numero = parseInt(process.argv[2])
let numero2 = parseInt(process.argv[3])

if (numero > numero2) console.log(numero)
else console.log(numero2)
