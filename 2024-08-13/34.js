// Write a JavaScript program to find the largest number
// from the two given positive integers. The two numbers are in the range 40..60 inclusive.

let numero1 = parseInt(process.argv[2])
let numero2 = parseInt(process.argv[3])

if (numero1 < 40 || numero1 > 60) {
  console.log(`O número ${numero1} não está no intervalo`)
  return
}

if (numero2 < 40 || numero2 > 60) {
  console.log(`O número ${numero2} não está no intervalo`)
  return
}

let maior
if (numero1 > numero2) maior = numero1
else maior = numero2

console.log(`O maior número é ${maior}`)
