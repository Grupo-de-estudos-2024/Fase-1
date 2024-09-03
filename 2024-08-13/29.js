// Write a JavaScript program to check whether three given integer values are in
// the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

let numero1 = parseInt(process.argv[2])
let numero2 = parseInt(process.argv[3])
let numero3 = parseInt(process.argv[4])
let limiteInferior = 50
let limiteSuperior = 99
let primeiroIntervalo = numero1 >= limiteInferior && numero1 <= limiteSuperior
let segundoIntervalo = numero2 >= limiteInferior && numero2 <= limiteSuperior
let terceiroIntervalo = numero3 >= limiteInferior && numero3 <= limiteSuperior
let condicao = primeiroIntervalo || segundoIntervalo || terceiroIntervalo
console.log(condicao)
