// 03- Escreva um programa que receba um número inteiro de parâmetro
// e imprima a soma dos dígitos
// Exemplo: node programa.js 12345
// Deverá imprimir: 15

let numero = process.argv[2]
let ultimoIndex = numero.length - 1
let indexAtual = 0
let soma = 0

while (indexAtual <= ultimoIndex) {
  soma += parseInt(numero.charAt(indexAtual))
  indexAtual++
}
console.log(soma)
