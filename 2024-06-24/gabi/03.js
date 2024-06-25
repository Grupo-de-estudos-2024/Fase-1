// 3 - Crie um programa que receba uma nota inglesa (A, B, C, D, F)
// e imprima uma mensagem para o aluno de acordo com a nota

let nota = process.argv[2]

switch (nota.toLowerCase()) {
  case 'a':
    console.log('Aprovado! Nota A')
    break
  case 'b':
    console.log('Aprovado! Nota B')
    break
  case 'c':
    console.log('Aprovado! Nota C')
    break
  case 'd':
    console.log('Reprovado! Nota D')
    break
  case 'f':
    console.log('Reprovado! Nota F')
    break
  default:
    console.log('Nota inválida')
}
