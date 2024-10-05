// 03- Escreva um programa que contenha o seguinte trecho:
// const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
// const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
// e imprima todas as combinações possíveis de cartas
// Exemplo: node programa-03.js
// Deverá imprimir:
// Hearts 2
// Hearts 3
// Hearts 4
// ...
// Hearts Ace
// Diamonds 2
// ...
// Spades Ace

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
const ranks = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
  'Ace',
]

let indexNaipe = 0
do {
  let naipeAtual = suits[indexNaipe]
  // console.log(naipeAtual)

  let indexCarta = 0
  do {
    let cartaAtual = ranks[indexCarta]
    console.log(naipeAtual + ' ' + cartaAtual)
    indexCarta++
  } while (indexCarta < ranks.length)

  indexNaipe++
} while (indexNaipe < suits.length)
