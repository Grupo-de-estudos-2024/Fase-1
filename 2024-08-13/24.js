// Write a JavaScript program to create another string from a
// given string with the first character of the given string added to the front and back.
// teste -> ttestet

let texto = process.argv[2]

let novoTexto = texto.charAt(0) + texto + texto.charAt(0)
console.log('Texto: ' + novoTexto)
