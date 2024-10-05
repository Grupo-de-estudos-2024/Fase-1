// 06- Escreva um programa que receba um texto de parâmetro
// e imprima se o texto é um palíndromo

// let texto = process.argv[2]
// texto = texto.toLowerCase()
// let textoAuxiliar = ''
// let index = texto.length - 1
// let i = 0

// do {
//   textoAuxiliar += texto.charAt(index)
//   index--
//   i++
// } while (i <= texto.length)

// if (texto !== textoAuxiliar) {
//   console.log('O texto ' + texto + ' não é um palindromo')
// } else {
//   console.log('O texto ' + texto + ' é um palindromo')
// }

let texto = process.argv[2]
texto = texto.toLowerCase()
let textoAuxiliar = ''
let index = texto.length - 1

do {
  textoAuxiliar += texto.charAt(index)
  index--
} while (index >= 0)

if (texto !== textoAuxiliar) {
  console.log('O texto ' + texto + ' não é um palindromo')
} else {
  console.log('O texto ' + texto + ' é um palindromo')
}
