// Escreva um programa que recebe o valor de uma compra
// e calcula o valor final da compra baseado em regras de descontos
// Compras acima de 100 tem desconto de 20%
// Compras acima de 50 tem desconto de 10%
// Compras abaixo de 50 não tem desconto
// O programa deve conter uma função que recebe o valor total
// da compra e retorna o valor com desconto
// Ao final deve-se imprimir o valor da compra

let valorDaCompra = process.argv[2]

function descontar(valor) {
  if (valor >= 100) {
    valor = valor * 0.8
    return valor
  } else if (valor >= 50) {
    valor = valor * 0.9
    return valor
  } else {
    return valor
  }
}

console.log(descontar(valorDaCompra))
