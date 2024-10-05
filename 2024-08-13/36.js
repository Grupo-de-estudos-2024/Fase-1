// Write a JavaScript program that checks whether
// the last digit of three positive integers is the same.

// 3 53 1933 -> true
// 3 45 5555 -> false

let numero1 = process.argv[2]
let numero2 = process.argv[3]
let numero3 = process.argv[4]

let ultimoNumero1 = numero1.charAt(numero1.length - 1)
let ultimoNumero2 = numero2.charAt(numero2.length - 1)
let ultimoNumero3 = numero3.charAt(numero3.length - 1)

if (ultimoNumero1 == ultimoNumero2 && ultimoNumero2 == ultimoNumero3) {
  console.log(`Todos os números terminam em ${ultimoNumero1}`)
} else {
  console.log(
    `Os números terminam em ${ultimoNumero1}, ${ultimoNumero2} e ${ultimoNumero3}`
  )
}
