// Escreva uma função que inverte um texto
// Escreva um programa que recebe um texto de argumento
// e usa a função criada anteriormente para
// inverter o texto. Depois deve-se imprimir o texto
// no console

let texto = process.argv[2]

function inverter(txt) {
  let textoFinal = ''
  for (let i = txt.length - 1; i >= 0; i--) {
    textoFinal += txt[i]
  }
  console.log(textoFinal)
}
inverter(texto)
inverter('um texto qualquer')
