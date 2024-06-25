// 5 - Crie um programa que receba um número inteiro de 1 até 7
// e imprima o dia se é um dia útil ou fim de semana

let dia = parseInt(process.argv[2])

switch (dia) {
  case 6:
  case 7:
    console.log('Fim de Semana!')
    break
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('Dia Útil')
    break
}
console.log('Fim do programa')
