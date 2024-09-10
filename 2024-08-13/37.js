// Write a JavaScript program to produce a new string
// that has the first 3 characters in lower case from a given string.
// If the string length is less than 3 convert all the characters to upper case.

// MEU TEXTO EXEMPLO -> meu TEXTO EXEMPLO
// ab -> AB

let texto = process.argv[2]

if (texto.length < 3) {
  texto = texto.toUpperCase()
  console.log(texto)
} else {
  let minusculo = texto.substring(0, 3).toLowerCase()
  let restante = texto.substring(3)
  texto = minusculo + restante
  console.log(texto)
}
