// Crie um programa que receba um texto
// e imprima a quantidade de vogais

let texto = process.argv[2]
let vogais = 0
let indexCaractere = 0
while (indexCaractere < texto.length) {
  let caracter = texto.toLowerCase().charAt(indexCaractere)

  if (
    caracter == 'a' ||
    caracter == 'e' ||
    caracter == 'i' ||
    caracter == 'o' ||
    caracter == 'u'
  )
    vogais++

  indexCaractere++
}
console.log('O texto tem ' + vogais + ' vogais')
