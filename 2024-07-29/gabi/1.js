// 1- Escreva um programa que receba um número inteiro de parâmetro
// caso o parâmetro não seja um número inteiro dê throw de uma mensagem de erro

let numero = parseInt(process.argv[2])

// if (Number.isInteger(numero)) {
//   console.log('É um inteiro')
// } else {
//   throw 'não é um inteiro'
// }

try {
  if (!Number.isInteger(numero)) {
    throw 'Não é um inteiro'
  } else {
    console.log('É um inteiro')
  }
} catch (err) {
  console.log(err)
}
