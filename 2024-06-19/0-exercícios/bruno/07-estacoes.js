// Escreva um programa que receba um número inteiro
// como parâmetro e que seja um mês
// imprima a estação do ano correspondente

let mes = parseInt(process.argv[2])

if (mes > 3 && mes <= 6) console.log(' Outono')
else if (mes > 6 && mes <= 9) console.log(' Inverno')
else if (mes > 9 && mes <= 12) console.log(' primavera')
else console.log(' é verão')
