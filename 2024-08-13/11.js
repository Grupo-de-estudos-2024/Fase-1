// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Examples:
// node 11.js 60c
// 140f()
// node 11.js 45f
// 7.2222c

let temperatura = process.argv[2].toLowerCase()

// 'abcdef'
// primeiro caracter: a (index: 0)
// segundo caracter: b (index: 1)

let ultimoIndex = temperatura.length - 1
let tipoTemperaruta = temperatura.charAt(ultimoIndex)
let graus = temperatura.substring(0, ultimoIndex)

if (tipoTemperaruta == 'c') {
  let fahrenheit = (9 * graus) / 5 + 32
  console.log(fahrenheit + 'F')
} else if (tipoTemperaruta == 'f') {
  let celsius = (5 * (graus - 32)) / 9
  console.log(celsius + 'C')
}

// fahrenheit = (9*celsius/5) + 32 ;
// celsius = 5*(fahrenheit - 32) / 9
