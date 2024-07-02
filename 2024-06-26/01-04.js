// 04- Escreva um programa que liste todos os números
// de 0 até 1000 que sejam múltiplos de 3 e 5
// Ao final do programa, imprima a soma de todos esses números

let soma = 0
let i = 0
while (i <= 1000) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i)
    soma += i
  }
  i++
}
console.log(soma)
