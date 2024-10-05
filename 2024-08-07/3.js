// Escreva um programa que receba um número de parâmetro
// O programa deve conter uma função que eleva o número
// ao cubo. O programa deve usar essa função para calcular
// o cubo do valor informado pelo usuário e então
// imprimir o valor no console

let numero = process.argv[2]

function elevar(num) {
  return num ** 3
}

console.log(elevar(numero))
