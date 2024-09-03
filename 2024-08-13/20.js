// Write a JavaScript program to check two given integers
// whether one is positive and another one is negative.

let primeiroNumero = process.argv[2]
let segundoNumero = process.argv[3]

if (
  (primeiroNumero > 0 && segundoNumero < 0) ||
  (segundoNumero > 0 && primeiroNumero < 0)
) {
  console.log(`Um negativo e outro positivo`)
} else console.log(`Não é um negativo e outro positivo`)
