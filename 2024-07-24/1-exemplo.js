// Receba um texto
// e imprima cada uma das vogais

let texto = process.argv[2].toLowerCase()

for (let index = 0; index < texto.length; index++) {
  let caracter = texto.charAt(index)
  if (
    caracter === 'a' ||
    caracter === 'e' ||
    caracter === 'i' ||
    caracter === 'o' ||
    caracter === 'u'
  ) {
    console.log(caracter)
  }
}
