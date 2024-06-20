// Escreva um programa que receba um número inteiro de
// 0 até 100 como parâmetro e imprima a nota inglesa
// correspondente ao número dado.
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let nota = parseInt(process.argv[2])
if (nota <= 49) console.log('sua nota é ' + 'F')
else if (nota >= 50 && nota <= 59) console.log('sua nota é ' + 'D')
else if (nota >= 60 && nota <= 69) console.log('sua nota é ' + 'C')
else if (nota >= 70 && nota <= 89) console.log('sua nota é ' + 'B')
else console.log('Sua nota é ' + 'A')
