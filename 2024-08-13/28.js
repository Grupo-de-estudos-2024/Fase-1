// Write a JavaScript program to check whether two given integer values are in
// the range 50..99 (inclusive). Return true if either of them falls within the range.

let numero1 = parseInt(process.argv[2])
let numero2 = parseInt(process.argv[3])
let limiteInferior = 50
let limiteSuperior = 99
let primeiroIntervalo = numero1 >= limiteInferior && numero1 <= limiteSuperior
let segundoIntervalo = numero2 >= limiteInferior && numero2 <= limiteSuperior
let condicao = primeiroIntervalo || segundoIntervalo
console.log(condicao)
