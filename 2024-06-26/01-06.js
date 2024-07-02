// 06- Escreva um programa que receba um número inteiro de parâmetro
// e use loops para imprimir quantos dígitos um número tem.

// Forma não desafiadora:
// let numero = process.argv[2]
// console.log(numero.length)

let numero = parseInt(process.argv[2])
let qtdDigitos = 1
console.log('verificando qtd de dígitos de ', numero)
while (numero / 10 >= 1) {
  console.log('O número ' + numero + ' pode ser dividido por 10')
  numero = numero / 10
  qtdDigitos++
}
console.log(qtdDigitos)
