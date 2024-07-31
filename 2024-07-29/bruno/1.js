// 1- Escreva um programa que receba um número inteiro de parâmetro
// caso o parâmetro não seja um número inteiro dê throw de uma mensagem de erro

let numero = process.argv[2]

// 1. Verificar se o texto 'numero' contém ',' ou '.'

if (!Number.isInteger(numero)) {
  // return 'È inteiro'
  throw 'não é inteiro'
}

// if (Number.isInteger(numero)) {
//   console.log('É um inteiro')
// } else {
//   throw 'não é um inteiro'
// }

// try {
//   if (Number.isInteger(numero)) {
//     // return 'È inteiro'
//     throw 'é inteiro'
//   }
// } catch (err) {
//   console.log(err)
//   throw err
// }

// throw 'Não é inteiro'

console.log(numero)
