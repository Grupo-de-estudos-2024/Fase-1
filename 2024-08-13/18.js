// Write a JavaScript program to check a pair of numbers and return
// true if one of the numbers is 50 or if their sum is 50.

let numero = parseInt(process.argv[2])
let numero2 = parseInt(process.argv[3])
// let igual50 = false

// if (numero == 50 || numero2 == 50 || numero + numero2 == 50) {
//   igual50 = true
// }
// console.log(igual50)
let igual50 = numero == 50 || numero2 == 50 || numero + numero2 == 50
console.log(igual50)
