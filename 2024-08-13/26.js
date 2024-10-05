// Write a JavaScript program to create a string from a given string.
// This is done by taking the last 3 characters and adding them at both the front and back.
// The string length must be 3 or more.

let texto = process.argv[2]

if (texto.length >= 3) {
  let parte = texto.substring(texto.length - 3)
  let novoTexto = parte + texto + parte
  console.log(novoTexto)
} else {
  console.log('Texto muito curto')
}
