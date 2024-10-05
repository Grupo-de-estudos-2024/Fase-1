// Write a JavaScript program to check whether a string "Script"
// appears at the 5th (index 4) position in a given string.
// If "Script" appears in the string, return the string without "Script" otherwise return the original one.
// Java -> Java
// CoffeeScript -> CoffeeScript
// JavaScript -> Java
// GabiScript -> Gabi
// GabiScriptGabi -> GabiGabi

let texto = process.argv[2]
let parte = 'Script'

if (texto.substring(4, 11) == parte) {
  texto = texto.replace('Script', '')
}
console.log(texto)
