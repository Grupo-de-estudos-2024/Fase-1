// Escreva um programa que receba um número inteiro de
// 0 até 100 como parâmetro e imprima a nota inglesa
// correspondente ao número dado.
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let nota = parseInt(process.argv[2])

if (nota >= 90) {
  console.log('Nota A')
} else if (nota <= 89 && nota >= 70) {
  console.log('Nota B')
} else if (nota <= 69 && nota >= 60) {
  console.log('Nota C')
} else if (nota <= 59 && nota >= 50) {
  console.log('Nota D')
} else {
  console.log('Nota F')
}
