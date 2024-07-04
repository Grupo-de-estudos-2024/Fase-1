// 01- Escreva um programa que some todos os números de 0 até 100

let soma = 0
let contagem = 0

while (contagem <= 100) {
  soma = soma + contagem // ou soma += contagem
  contagem++
  console.log(soma)
}

console.log('valor da soma é', soma)

// volta 0 soma = 0 // contagem = 01
// volta 1 soma = 1 // contagem = 02
// volta 3 soma = (1 + contagem (2)) // contagem = 03 // console.log = 6
// volta 4 soma = 6 // contagem = 4 // console.log = 10
