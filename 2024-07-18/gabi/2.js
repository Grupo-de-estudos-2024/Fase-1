// 02- Escreva um programa que contenha o seguinte array:
// let numeros = [321, 3565, 542, 362367, 23891, 1272, 2131321321, 2211, 334]
// e imprima o maior número do array
// IMPORTANTE: não vale usar um index fixo, ou seja,
// o programa deve percorrer os números do array
// e verificar qual é o maior

let numeros = [
  92131321321, 321, 3565, 542, 362367, 23891, 1272, 2131321321, 2211, 334,
]
let maiorNumero = 0
let indexArray = 0

do {
  let numeroAtual = numeros[indexArray]
  if (numeroAtual > maiorNumero) {
    console.log(`Achei um número maior que ${maiorNumero} que é ${numeroAtual}`)
    maiorNumero = numeroAtual
  }
  indexArray++
} while (indexArray < numeros.length)
console.log(maiorNumero)

// while (indexArray < numeros.length) {
//   let numeroAtual = numeros[indexArray]
//   if (numeroAtual > maiorNumero) {
//     maiorNumero = numeroAtual
//   }
//   indexArray++
// }
// console.log(maiorNumero)
