// Write a JavaScript program to compute the absolute difference between
// a specified number and 19. Returns triple the absolute difference
// if the specified number is greater than 19.

let numero = process.argv[2]
if (numero <= 19) console.log(19 - numero)
else console.log(Math.abs(19 - numero) * 3)
