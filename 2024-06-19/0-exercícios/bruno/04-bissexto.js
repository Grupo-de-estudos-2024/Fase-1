// Escreva um programa que receba um número inteiro
// como parâmetro. Interprete esse número como um ano
// e imprima se ele é bissexto ou não.

// O ano bissexto possui 1 dia a mais sendo assim 366
// é múltiplo de 400, 1200, 1600, 2000, 2400, 2800
// é multiplo de 4 mas não é de 100 ( 1996, 2000, 2004, 2008, 2021,2016,)
// Um ano cujos dois últimos dígitos sejam divisíveis por 4 é um ano bissexto,
// e tem 366 dias, porque é adicionado um dia extra.

let ano = parseInt(process.argv[2])

if (ano % 400 == 0) console.log('Este ano é bissexto')
else if (ano % 4 == 0 && ano % 100 != 0) {
  console.log('Este ano é bissexto')
} else console.log('não é bissexto')
