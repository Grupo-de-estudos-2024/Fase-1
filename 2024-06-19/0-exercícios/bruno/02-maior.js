// Escreva um programa que receba dois números inteiros
// como parâmetros e imprima o maior deles.

let N1 = ParseInt(process.argv[2])
let N2 = ParseInt(process.argv[3])

if (N1 > N2) console.log(N1)
else console.log(N2)
