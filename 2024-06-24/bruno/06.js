// 6 - Crie um programa que que receba dois números inteiros
// e um operador aritmético (+, -, x, /) e imprima o resultado
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

let X = parseFloat(process.argv[2])
let Y = process.argv[3]
let Z = parseFloat(process.argv[4])

switch (Y) {
  case '+':
    console.log(X + Z)
    break
  case '-':
    console.log(X - Z)
    break
  case 'x':
    console.log(X * Z)
    break
  case '/':
    console.log(X / Z)
    break
  default:
    console.log('Operação inválida')
}
