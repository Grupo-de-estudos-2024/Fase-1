// Write a program to check whether a specified character
// exists between the 2nd and 4th positions in a given string.

let texto = process.argv[2]
let caracter = process.argv[3]

if (
  texto.charAt(1) == caracter ||
  texto.charAt(2) == caracter ||
  texto.charAt(3) == caracter
) {
  console.log('O caracter ' + caracter + ' existe no texto')
} else {
  console.log('O caracter ' + caracter + ' não existe no texto')
}
