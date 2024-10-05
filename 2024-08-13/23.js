// Write a JavaScript program to create a new string from a given
// string by changing the position of the first and last characters.
// The string length must be broader than or equal to 1.

let texto = process.argv[2]
if (!texto.length) {
  console.log('Texto muito curto')
  return
}

let textoInvertido = texto.charAt(texto.length - 1)
textoInvertido += texto.substring(1, texto.length - 1)
textoInvertido += texto.charAt(0)
console.log(textoInvertido)

// let textoInvertido = texto.charAt(texto.length - 1)
// for (let i = 1; i < texto.length - 1; i++) {
//   textoInvertido += texto.charAt(i)
// }
// textoInvertido += texto.charAt(0)
// console.log(textoInvertido)
