// Write a JavaScript program to check from two given integers whether one
// of them is 8 or their sum or difference is 8.

let numero1 = parseInt(process.argv[2])
let numero2 = parseInt(process.argv[3])

if (numero1 == 8) {
  console.log('O primeiro número é 8')
  return
}

if (numero2 == 8) {
  console.log('O segundo número é 8')
  return
}

if (numero1 + numero2 == 8) {
  console.log(`A soma dos números ${numero1} e ${numero2} é 8`)
  return
}

if (numero1 - numero2 == 8) {
  console.log(`A diferença dos números ${numero1} e ${numero2} é 8`)
  return
}

console.log(`Os números não são associados ao 8`)
