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
// 20 = [ 1, 2, 4, 5, 10, 20]

let a = parseInt(process.argv[2]) // 10

let b = parseInt(process.argv[3]) // 20

let array1 = [] // Todos dividores de A
let array2 = [] // Todos dividores de B

let c1 = 0
let c2 = 0
let c3 = 0
let mdc = 1

while (c1 <= a) {
  if (a % c1 === 0) {
    array1.push(c1)
  }
  c1++
}
console.log(array1)

while (c2 <= b) {
  if (b % c2 === 0) {
    array2.push(c2)
  }
  c2++
}
console.log(array2)

let maiorArray = array1
if (c1.length < c2.length) maiorArray = array2 // Para verificar o array 1 e o array 2 eu preciso saber qual o maior

while (c3 < maiorArray.length) {
  // console.log( " o valor de c3 " +  c3) // contador = c3
  // console.log(" O valor de maiorarray[c3]  " + maiorArray[c3])
  if (
    array1.indexOf(maiorArray[c3]) !== -1 &&
    array2.indexOf(maiorArray[c3]) !== -1
  ) {
    if (maiorArray[c3] > mdc) {
      mdc = maiorArray[c3]
    }
  }
  c3++ // no looping c3 vale a quantidade de voltas e dentro array c3 vale o index verificado.
}
console.log(`O Maior divisor comun entre ${array1} e ${array2} é : ${mdc}`)

// console.log (c3)
// console.log (maiorArray[c3])
// console.log (array1.indexOf(maiorArray[c3]))
// console.log(array2.indexOf(maiorArray[c3]))
