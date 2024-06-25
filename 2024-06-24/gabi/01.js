// 1 - Crie um programa que receba um número de 1 até 7
// e imprima o dia da semana correspondente

let dia = parseInt(process.argv[2])
// ===

switch (dia) {
  case 1:
    console.log('Segunda-feira')
    break
  case 2:
    console.log('Terça-feira')
    break
  case 3:
    console.log('Quarta-feira')
    break
  case 4:
    console.log('Quinta-feira')
    break
  case 5:
    console.log('Sexta-feira')
    break
  case 6:
    console.log('Sábado')
    break
  case 7:
    console.log('Domingo')
    break
  default:
    console.log('Número não definido')
}
