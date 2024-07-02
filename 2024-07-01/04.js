// Escreva um programa que receba um número inteiro de parâmetro
// e determine se trata de um número de armstrong

let numero = parseInt(process.argv[2])

if (numero <= 99) {
  console.log('Número muito pequeno')
} else if (numero > 999) {
  console.log('Número muito grande')
} else {
  // verificando se o é número de armstrong
  let texto = numero.toString()
  let primeiro = parseInt(texto.charAt(0))
  let segundo = parseInt(texto.charAt(1))
  let terceiro = parseInt(texto.charAt(2))

  let numeroFinal = primeiro ** 3 + segundo ** 3 + terceiro ** 3
  console.log('Calculei o número', numeroFinal)

  if (numeroFinal == numero) {
    console.log('É número de armstrong')
  } else {
    console.log('Não é número de armstrong')
  }
}
