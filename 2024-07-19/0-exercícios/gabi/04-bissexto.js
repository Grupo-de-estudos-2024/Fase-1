// Escreva um programa que receba um número inteiro
// como parâmetro. Interprete esse número como um ano
// e imprima se ele é bissexto ou não.

let ano = parseInt(process.argv[2])

if (ano % 4 == 0) {
  console.log('BISSEXTO')
} else {
  console.log('NÃO É BISSEXTO')
}
