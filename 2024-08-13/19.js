// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

let numero = parseInt(process.argv[2])

if (numero >= 20 && numero <= 100) {
  console.log('Intervalo entre 20 e 100')
} else if (numero < 400) {
  console.log('Intervalo entre 100 e 400')
} else {
  console.log('Fora do intervalo')
}

// Vou fazer café, já volto
