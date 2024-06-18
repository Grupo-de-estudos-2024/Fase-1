// https://www.w3schools.com/js/js_if_else.asp

let time
let greeting

if (time < 10) {
  greeting = 'Good morning'
} else if (time < 20) {
  greeting = 'Good day'
} else {
  greeting = 'Good evening'
}

console.log(greeting)

let tamanhoCamisa = 'pequena'
let nome = 'joao'

if (nome === 'gabi') {
  tamanhoCamisa = 'pequena'
} else if (nome === 'pet') {
  tamanhoCamisa = 'média'
} else if (nome === 'bruno') {
  tamanhoCamisa = 'grande'
}

console.log('o tamanho da camisa do ' + nome + ' é ' + tamanhoCamisa)
