// 4- Escreva um programa que receba um texto e imprima cada um dos caracteres individualmente

let texto = process.argv[2].toLowerCase()

for (let index = 0; index < texto.length; index++) {
  let caracter = texto.charAt(index)
  console.log(caracter)
}
