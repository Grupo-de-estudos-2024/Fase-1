// 01- Escreva um programa que imprima os primeiros 10 números de Fibonacci

let ultimoNumero = 1
let penultimoNumero = 1
console.log(penultimoNumero)
console.log(ultimoNumero)

let indexNumeroAtual = 2
let ultimoIndex = 10
while (indexNumeroAtual < ultimoIndex) {
  let temp = ultimoNumero
  ultimoNumero = ultimoNumero + penultimoNumero
  penultimoNumero = temp
  console.log(ultimoNumero)
  indexNumeroAtual++
}
