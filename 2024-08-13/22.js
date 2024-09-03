// Write a JavaScript program to remove a character at the specified position in a given
// string and return the modified string

//1. substring
// pegar todo texto antes da posicao
// pegar todo texto depois da posicao
// concatenar as duas
//2. for
// iteraria cada um dos caracters do texto
// e copiaria cada caracter para uma nova variável
// exceto na posicao informada
//3. arrays
// transformar o texto em um array
// e usar alguma função que remova um elemento
// do array baseado em posicao (slice)
// e depois juntas os caracters desse array
// de volta para um texto

// for (let i = 0; i < texto.length; i++) {
//   if (i == posicao) {
//     texto.remove(i)
//   }
// }

let texto = process.argv[2]
let posicao = parseInt(process.argv[3])

let textoInicio = texto.substring(0, posicao)
let textoFinal = texto.substring(posicao + 1)
let textoCompleto = textoInicio + textoFinal

console.log('Texto completo: ' + textoCompleto)
