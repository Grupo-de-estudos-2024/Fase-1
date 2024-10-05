// Realize os exercícios abaixo usando o loop do while

// 01- Escreva um programa que simule um dado sendo lançado
// para cada vez que o dado for lançado, imprima o valor do dado (1-6)
// E continue lançamento do dado até rolar 6
// referência recomendada para simular rolagem de dados:
// Math.random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Math.floor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// Math.ceil: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
// Math.round: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

//Jeito 1
// let lancamento = 0
// do {
//   lancamento = Math.floor(Math.random() * 6) + 1 // traz uma multiplicação entre o valor máximo e o valor minimo. }
//   console.log(lancamento)
// } while (lancamento < 6)
// console.log(' Jackpot ' + lancamento)

// Jeito 2
// let lancamento = 0
// do {
//   lancamento = Math.floor(Math.random() * (7 - 1)) + 1 // traz uma multiplicação entre o valor máximo e o valor minimo. }
//   if (lancamento != 6) console.log(lancamento)
//   else console.log(`Jackpot ${lancamento}`) // string templating
// } while (lancamento < 6)
// console.log(' Jackpot ' + lancamento)

let lancamento = 0
do {
  lancamento = Math.floor(Math.random() * (7 - 1)) + 1 // traz uma multiplicação entre o valor máximo e o valor minimo. }
  console.log(lancamento)
} while (lancamento < 6)
console.log(`Jackpot ${lancamento}`) // string templating
