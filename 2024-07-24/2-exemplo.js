// Dado o array abaixo
let numeros = [3, 5, 7, 2, 8, 99, -1, 200, 4, 10, 12]
// imprima o maior número do array

let maiorNumero = numeros[0]

for (let index = 1; index < numeros.length; index++) {
  let numeroAtual = numeros[index]
  if (numeroAtual > maiorNumero) {
    maiorNumero = numeroAtual
  }
}
console.log(maiorNumero)
