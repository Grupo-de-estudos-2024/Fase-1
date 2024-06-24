// Escreva um programa que ao executado
// deve cumprimentar conforme o horário atual
// De manhã: 'Bom dia!'
// De tarde: 'Boa tarde!'
// De noite: 'Boa noite!'
// Protip: pesquise e utilize a função 'new Date()' e 'getHours()'

let horalocal
let date = new Date()
let x = date.getHours()

if (x < 12) horalocal = 'bom dia'
else if (x >= 12 && x < 20) horalocal = 'boa tarde! '
else horalocal = 'Boa noite'

console.log(horalocal)

// Recuperando hora atual em uma linha
let hours = new Date().getHours()
