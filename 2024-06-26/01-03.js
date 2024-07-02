// 03- Escreva um programa que use loops para imprimir o seguinte:
// *
// * *
// * * *
// * * * *
// * * * * *

// let qtdEstrelas = 1
// while (qtdEstrelas <= 5) {
//   // Esse loop é para as diferentes linhas
//   let estrelas = ''
//   let estrelaColocadas = 0

//   while (estrelaColocadas < qtdEstrelas) {
//     // Esse loop é para criar uma das linhas
//     estrelas = estrelas + '* '
//     estrelaColocadas++
//   }

//   console.log(estrelas)
//   qtdEstrelas++
// }

let qtdEstrelas = 0
let estrelas = ''
while (qtdEstrelas < 5) {
  estrelas += '* '
  console.log(estrelas)
  qtdEstrelas++
}
