// 03- Escreva um programa que receba um número inteiro de parâmetro
// e imprima esse número invertido.
// Exemplo: node programa.js 12345
// Deverá imprimir: 54321
// Refência que pode ajudar: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

let numeroRecebido = process.argv[2] // número recebido no terminal
let texto = numeroRecebido.toString() // transforma número recebido em string e atribui a variavel texto
let index = texto.length - 1 // acessa o ultimo index da variavel texto.
let numeroInvertido = ' ' // atribui uma string vazia a variavel numero invertido

while (index >= 0) {
  // inicia o while comparando se o ultimo index é maior ou igual 0, o 0 é a ultima posição a ser verificada pelo looping
  numeroInvertido += texto.charAt(index) // adiciona a string vazia o ultimo index da variavel texto
  index-- // diminui 1 para percorrer o próximo index da variavel texto dentro do looping,
  // quando o looping iniciar novamente o próximo index vai ser adicionado a variavel número invertido.
}
console.log(numeroInvertido) // printa a variavel fora do while.
