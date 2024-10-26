// 53 - Write a JavaScript program to check whether the
// characters a and b are separated by exactly 3
// characters anywhere (at least once) in a given string
// case insensitive
// bola -> 2 espaços -> false
// boola -> 3 espaços -> true
// abobora -> false
// ab -> 0 espaços -> false
// a**b -> 2 espaços -> false
// *b****a -> 4 espaços -> false
// ***b**a -> 2 espaços -> false
// aboboora -> true
// ab -> false
// abacateira -> false
// abalcateira -> true

const texto = process.argv[2]

let indexAtual = 0

while (texto.indexOf('a', indexAtual) != -1) {
  let indexDoA = texto.indexOf('a', indexAtual)

  if (texto[indexDoA - 4] == 'b' || texto[indexDoA + 4] == 'b') {
    console.log('true')
    return
  }

  indexAtual = indexDoA + 1
}
console.log('false')
