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

// Determinar qual é o menor valor (entre A e B)
// descobrir os divisores do menor valor
// Para cada um dos divisores do menor valor
// tentamos dividir o maior valor

// let primeiroNumero = process.argv[2]
// let segundoNumero = process.argv[3]
// let menor;
// let i = 0;
// let divisor;

// if(primeiroNumero < segundoNumero){
//     menor = primeiroNumero
// } else {
//     menor = segundoNumero
// }

// while(i <= menor){
//     if(menor % i == 0)
//     i++}

let primeiro = process.argv[2]
let segundo = process.argv[3]

let divisoresPrimeiro = []
let divisoresSegundo = []
let i = 0
let divisor

while (i <= primeiro) {
  if (primeiro % i == 0) {
    divisor = i
    console.log(divisor)
  }
  i++
}
