// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum.

let numero = parseInt(process.argv[2])
let numero2 = parseInt(process.argv[3])

let soma = numero + numero2

if (numero === numero2) {
  soma *= 3
  console.log('Resultado: ' + soma)
}
console.log(soma)
