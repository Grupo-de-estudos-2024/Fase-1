// Write a JavaScript program to calculate
// multiplication and division of two numbers (input from the user).
// We must support the following syntax:
// node 10.js 10 / 5
// which would divide 10 by 5
// and also the syntax:
// node 10.js 10 x 5
// which would multiply 10 by 5

let numero1 = parseFloat(process.argv[2])
let operador = process.argv[3]
let numero2 = parseFloat(process.argv[4])

switch (operador) {
  case 'x':
    let multiplicacao = numero1 * numero2
    console.log('Resultado Multiplicacao: ' + multiplicacao)
    break
  case '/':
    let divisao = numero1 / numero2
    console.log('Resultado Divisao: ' + divisao)
    break
  default:
    console.log('Operador Inválido')
}

// if (operador == 'x') {
//   let multiplicacao = numero1 * numero2
//   console.log('Resultado Multiplicacao: ' + multiplicacao)
// } else if (operador == '/') {
//   let divisao = numero1 / numero2
//   console.log('Resultado Divisao: ' + divisao)
// } else {
//   console.log('Operador Inválido')
// }
