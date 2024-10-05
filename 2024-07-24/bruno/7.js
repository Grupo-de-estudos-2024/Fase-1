// 7- Imprima a tabela de multiplicação de 1 a 10
// Exemplo de resultado:
// 1x1 = 1
// 1x2 = 2
// ... até 1x10 = 10
// 2x1 = 2
// 2x2 = 4
// ... até 2x10 = 20
// ... até 10x10 = 100

// i x j = valor
// i 1 -> 10
// j 1 -> 10

// 1x 2x 3x
let multiplicacao = 1
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    multiplicacao = i * j
    console.log(i + ' X ' + j + ' = ' + multiplicacao)
  }
}

//   if (tabuada <= 10) {
//     number = number * tabuada
//     console.log(number + 'x ' + tabuada + '=' + number)
//     tabuada++
//   }
// }
