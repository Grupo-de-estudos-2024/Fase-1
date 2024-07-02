// let numero = process.argv[2]
// let i = 0

// while (i < numero.length) {
//   i++
// }
// console.log(i)

let numero = parseInt(process.argv[2])
let digitos = 1
while (numero / 10 >= 1) {
  digitos++
  numero = numero / 10
}
console.log(digitos)
