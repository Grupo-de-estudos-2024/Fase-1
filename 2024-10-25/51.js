// 51 Write a JavaScript application that transforms a
// provided numerical value into hours and minutes
// Considere que o número recebido é a quantidade de minutos
// e o resultado deve ser a quantidade de horas e minutos formatados
// exemplo: node 51.js 120
// Deverá imprimir: 2 horas e 0 minutos
// exemplo: node 51.js 150
// Deverá imprimir: 2 horas e 30 minutos

//primeiro dividir por 60.

// 160 = dividir por 60 2,6666

let numero = parseInt(process.argv[2])

let hora = numero / 60 // hora 2,66666
hora = hora.toString().split('.')
let minutosNasHoras = hora[0] * 60
let minutos = numero - minutosNasHoras
// let minutos = parseFloat('0.' + hora[1]) * 60

console.log(
  'A hora atual é ' + hora[0] + ' horas e ' + Math.round(minutos) + ' minutos'
)
