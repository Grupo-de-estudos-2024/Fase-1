// Write a JavaScript program to get the difference between a
// given number and 13, if the number is broader than 13 return double the absolute difference.

let numero = parseInt(process.argv[2])

if (numero > 13) {
  numero = Math.abs(13 - numero) * 2
} else {
  numero = numero - 13
}
console.log('Resultado: ', numero)
