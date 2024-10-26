// 52 -  Write a JavaScript program to convert letters of a given string alphabetically
// Python -> hnoPty
// Pacoca -> aaccoP
let texto = process.argv[2]

texto = texto.toLowerCase().split('').sort().join('')
console.log(texto)
