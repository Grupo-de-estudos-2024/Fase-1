// 06- Escreva um programa que receba um texto de parâmetro
// e imprima se o texto é um palíndromo

let texto = process.argv[2]

// Função auxiliar para verificar se um caractere é uma letra
function ehLetra(caractere) {
  return /[a-zA-Z]/.test(caractere)
}

let inicio = 0
let fim = texto.length - 1

let ehPalindromo = true
// texet

while (inicio < fim) {
  // while (!ehLetra(texto[inicio])) {
  //   inicio++
  // }
  // while (!ehLetra(texto[fim])) {
  //   fim--
  // }
  // Se os caracteres não coincidirem, não é um palíndromo
  if (texto[inicio].toLowerCase() !== texto[fim].toLowerCase()) {
    ehPalindromo = false
    break
  }
  inicio++
  fim--
}
if (ehPalindromo) {
  console.log(`"${texto}" é um palíndromo.`)
} else {
  console.log(`"${texto}" não é um palíndromo.`)
}
