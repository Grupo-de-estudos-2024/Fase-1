// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

let numero = parseInt(process.argv[2])
let multiplo = numero % 3 === 0 || numero % 7 === 0
console.log(multiplo)
