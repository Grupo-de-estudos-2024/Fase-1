// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
// console.clear()
// setInterval(func, ms) -> https://developer.mozilla.org/en-US/docs/Web/API/setInterval

// 1- texto desaparecendo
// 2- rodando

// let array = [1, 2, 3, 4]
// let string = 'meutextobonito'
// let novaString = ''
// for (let i = 0; i < string.length - 1; i++) {
//   let posicalAtual = string.charAt(i)
//   novaString = novaString + posicalAtual
// }
// console.log(novaString)
// string = novaString

// let j = 0
// while(j < array.length) {
//   j++
// }
let texto = 'w3resource'

function hello() {
  console.clear()
  console.log(texto)
  let subTexto = ''
  for (let i = 0; i < texto.length - 1; i++) {
    let caracterAtual = texto.charAt(i)
    subTexto = subTexto + caracterAtual
  }
  let ultimoCaracter = texto.charAt(texto.length - 1)
  texto = ultimoCaracter + subTexto
}

setInterval(hello, 500)
