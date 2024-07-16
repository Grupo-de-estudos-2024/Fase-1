// 03- Escreva um programa que receba um número inteiro de parâmetro
// e imprima a soma dos dígitos
// Exemplo: node programa.js 12345
// Deverá imprimir: 15

let numero = process.argv[2]
let ultimo = numero.toString().length - 1
let soma = 0
let contagem = 0

while (contagem <= ultimo) {
  let caracter = numero.charAt(contagem)
  soma += parseInt(caracter)
  console.log(caracter)
  contagem++
}
console.log(' A soma de todos os números é ' + soma)
