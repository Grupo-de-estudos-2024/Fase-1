// Write a JavaScript program to find the largest of three given integers.

let primeiro = parseInt(process.argv[2])
let segundo = parseInt(process.argv[3])
let terceiro = parseInt(process.argv[4])
let maior

// if (primeiro >= segundo && primeiro >= terceiro) {
//   maior = primeiro
// } else if (segundo >= terceiro) {
//   maior = segundo
// } else {
//   maior = terceiro
// }

// if (primeiro > segundo) {
//   if (primeiro > terceiro) maior = primeiro
//   else maior = terceiro
// } else {
//   if (segundo > terceiro) maior = segundo
//   else maior = terceiro
// }
// 99 15 10

// for (let i = 0; i < numeros.length; i++) {
//   if (i == 0) {
//     maior = numeros[0]
//   } else if (numeros[i] >= maior) {
//     maior = numeros[i]
//   }
// }
let numeros = [primeiro, segundo, terceiro]
numeros.sort()
maior = numeros[numeros.length - 1]

console.log('O maior número é:', maior)
