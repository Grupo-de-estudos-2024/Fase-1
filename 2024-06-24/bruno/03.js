// 3 - Crie um programa que receba uma nota inglesa (A, B, C, D, F)
// e imprima uma mensagem para o aluno de acordo com a nota

let nota = process.argv[2]
nota = nota.toUpperCase()

switch (nota) {
  case 'A':
    console.log('Aprovado,Parabéns')
    break
  case 'B':
    console.log('Aprovado')
    break
  case 'C':
    console.log('Aprovado')
    break
  case 'D':
    console.log('Reprovado,melhore')
    break
  case 'F':
    console.log('Reprovado, get good')
    break
  default:
    console.log('insira uma nota valida')
}
