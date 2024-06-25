// 4 - Crie um programa que receba um número inteiro de 1 até 12
// e imprima a estação do ano correspondente

let mes = parseInt(process.argv[2])

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log('verão')
    break
  case 4:
  case 5:
  case 6:
    console.log('Outono')
    break
  case 7:
  case 8:
  case 9:
    console.log('Inverno')
    break
  case 10:
  case 11:
  case 12:
    console.log('Primavera')
    break
  default:
    console.log('Número inválido')
}
