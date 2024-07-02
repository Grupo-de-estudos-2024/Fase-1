// Escreva um programa que receba um número inteiro N de parâmetro
// e imprima os N primeiros números pares
// Exemplo: node programa.js 3
// Deverá imprimir: 2 4 6

// let numeroDeParesAImprimir = parseInt(process.argv[2])
// let numerosImpressos = 0
// let numeroAVerificar = 1

// while (numerosImpressos < numeroDeParesAImprimir) {
//   if (numeroAVerificar % 2 == 0) {
//     console.log(numeroAVerificar)
//     numerosImpressos++
//   }
//   numeroAVerificar++
// }

let numeroDeParesAImprimir = parseInt(process.argv[2])
let numerosImpressos = 0
let par = 2
while (numerosImpressos < numeroDeParesAImprimir) {
  console.log(par)
  numerosImpressos++
  par += 2
}
