// Escreva um programa que receba um número inteiro como parâmetro
// e imprima se ele é par ou ímpar.

console.log(process.argv)
let programa = parseInt(process.argv)[2]
if (programa % 2 == 0) {
  console.log('par')
} else {
  console.log('impar')
}
