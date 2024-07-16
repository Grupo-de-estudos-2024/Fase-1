// 04- Escreva um programa que receba dois números inteiros
// e imprima o maior divisor comum entre eles
// Exemplo: node programa.js 100 1000
// Deverá imprimir: 100
// Exemplo: node programa.js 30 80
// Deverá imprimir: 10

// Dois números A e B
// Descobriria todos divisores de A
// Descobriria todos divisores de B
// A partir daqui, teremos dois arrays
// Um com todos divisores de A
// E outro com todos divisores de B
// PARTE NOVA
// Verificar qual o maior número que está
// no array de divisores de A e B

// 10 = [ 1 , 2, 5 , 10 ]
// 20 = [ 1, 2, 4, 5, 10, 20 ]

let A = parseInt(process.argv[2]) // 10

let B = parseInt(process.argv[3]) // 20

let array1 = []
let array2 = []

let c1 = 0
let divisao = 1
while (c1 <= A) {
  if (c1 % A === 0) {
  }
  c1++
}

//   if (A % divisao === 0)
//     array1[0] = divisao
//     console.log(array1)
//     c1++
