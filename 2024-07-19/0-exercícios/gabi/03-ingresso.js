// Escreva um programa que receba um a idade de uma pessoa
// como parâmetro e imprima e indique o valor do ingresso
// baseado nas seguintes regras:
// Entre 18 e 60 anos pagam o valor inteiro igual a 20
// 61+ pagam metade do valor
// entre 5-18 anos pagam um um quarto do valor
// entre 0-5 anos não pagam

let idade = parseInt(process.argv[2])

if (idade >= 18 && idade <= 60) console.log('Valor do Ingresso: ' + '20')
else if (idade >= 61) console.log('Valor do Ingresso: ' + '10')
else if (idade >= 5 && idade < 18) {
  console.log('Valor do Ingresso: ' + '5')
} else console.log('Valor do Ingresso: ' + '0')

// let valorIngresso = 40
// if (idade >= 18 && idade <= 60) {
// } else if (idade >= 61) {
//   valorIngresso /= 2
// } else if (idade >= 5 && idade <= 17) {
//   valorIngresso /= 4
// } else valorIngresso = 0

// console.log('O valor do ingresso é: ' + valorIngresso)
