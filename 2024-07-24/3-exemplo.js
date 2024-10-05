// Dado um texto (passado como parâmetro)
// verifique se é um palíndromo

let texto = process.argv[2].toLowerCase()
let palindromo = true

for (
  let indexComeco = 0, indexFinal = texto.length - 1;
  indexComeco < indexFinal;
  indexComeco++, indexFinal--
) {
  let caracterComeco = texto.charAt(indexComeco)
  let caracterFinal = texto.charAt(indexFinal)
  console.log('caracterComeco', caracterComeco)
  console.log('caracterFinal', caracterFinal)
  console.log('=========')

  if (caracterComeco != caracterFinal) {
    palindromo = false
    break
  }
}

if (palindromo) {
  console.log(texto, 'é um palíndromo')
} else {
  console.log(texto, 'não é um palíndromo')
}
