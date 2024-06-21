// Escreva um programa que receba um número inteiro como parâmetro
// e imprima se ele é par ou ímpar.

let numero = parseInt(process.argv[2])

if (numero % 2 == 0) {
  console.log('PAR')
} else {
  console.log('ÍMPAR')
}
