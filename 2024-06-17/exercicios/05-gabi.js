// Escreva um script que receba dois números de parametro
// e mostre a soma desses números no console
// Caso seja um número negativo, mostre 'negativo'
// Caso seja um número positivo, mostre 'positivo'

let parcela1 = parseInt(process.argv[2])
let parcela2 = parseInt(process.argv[3])
let soma = parcela1 + parcela2
console.log(soma)

if (soma > 0) {
  console.log('Positivo')
} else if (soma == 0) {
  console.log('Neutro')
} else {
  console.log('Negativo')
}

// if (soma > 0) {
//   console.log('positivo')
// } else if (soma < 0) {
//   console.log('negativo')
// }
