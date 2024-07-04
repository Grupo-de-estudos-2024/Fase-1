let numero = process.argv[2]
let invertido = ''
let final = numero.length - 1

while (final >= 0) {
  let atual = numero.charAt(final)
  invertido += atual
  final--
}

console.log(parseInt(invertido))
