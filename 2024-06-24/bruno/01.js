// 1 - Crie um programa que receba um número de 1 até 7
// e imprima o dia da semana correspondente

// process.argv[2]

let dia = process.argv[2]

switch (dia) {
  case '1':
    console.log('Segunda-Feira')
    break
  case '2':
    console.log('terça-feira')
    break
  case '3':
    console.log('quarta-feira')
    break
  case '4':
    console.log('quinta-feira')
    break
  case '5':
    console.log('sexta-feira')
    break
  case '6':
    console.log('Sábado')
    break
  case '7':
    console.log('Domingo')
    break
  default:
    console.log('número não definido')
}
