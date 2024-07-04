// 04- Escreva um programa que receba um número inteiro de parâmetro
// e imprima o fatorial desse número.
// Exemplo: node programa.js 3
// Deverá imprimir: 6
// Exemplo: node programa.js 4
// Deverá imprimir: 24

// fatorial de 6 = 1x2x3

let n = parseInt(process.argv[2]) // recebe número no terminal
// let multiploInicial = 2 // primeiro número a ser multplicado
let contagem = 1
let fatorial = 1

// n = 6
// let fatorial = 6 * (5 * (4 * (3 * (2 * 1))))

while (contagem <= n) {
  fatorial = fatorial * contagem
  console.log('fatorial de ' + contagem + ' é ' + fatorial)
  contagem++
}
console.log(fatorial)

// while (contagem <= n) {
//   contagem++
//   multiploInicial++
// }
// // multiploInicial = n + 2
// // contagem = n + 1
// console.log((n + 1) * (n + 2))
