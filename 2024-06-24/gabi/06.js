// 6 - Crie um programa que que receba dois números inteiros
// e um operador aritmético (+, -, *, /) e imprima o resultado
// dos números com o operador
// Exemplo:
// node calculadora.js 10 + 30
// Deverá imprimir 40
// node calculadora.js 10 - 30
// Deverá imprimir -20
// node calculadora.js 10 x 30
// Deverá imprimir 300
// node calculadora.js 30 / 10
// Deverá imprimir 3

let numero1 = parseInt(process.argv[2])
let numero2 = parseInt(process.argv[4])
let operador = process.argv[3]

switch (operador) {
  case '+':
    console.log(numero1 + numero2)
    break
  case '-':
    console.log(numero1 - numero2)
    break
  case 'x':
    console.log(numero1 * numero2)
    break
  case '/':
    console.log(numero1 / numero2)
    break
  default:
    console.log('Tente novamente')
}
