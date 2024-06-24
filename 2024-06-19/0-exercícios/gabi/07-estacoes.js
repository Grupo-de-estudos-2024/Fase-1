// Escreva um programa que receba um número inteiro
// como parâmetro e que seja um mês
// imprima a estação do ano correspondente

let mes = parseInt(process.argv[2])

if (mes >= 1 && mes <= 3) {
  console.log('VERÃO')
} else if (mes >= 4 && mes <= 6) {
  console.log('OUTONO')
} else if (mes >= 7 && mes <= 9) {
  console.log('INVERNO')
} else {
  console.log('Primavera')
}
