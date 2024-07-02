// 04- Escreva um programa que liste todos os números
// de 0 até 1000 que sejam múltiplos de 3 e 5 //
// Ao final do programa, imprima a soma de todos esses números

// eu quero então todos os numeros de 15 em 15
// A contagem sempre vai andar por que está fora do IF, porém
// só sera impressa quando atender a condição do IF.

let contagem = 0
let n = 0

while (contagem < 1001) {
  if (contagem % 3 == 0 && contagem % 5 == 0) {
    console.log(contagem)
    n = n + contagem
  }
  contagem++
  // 0
}
console.log(n)
