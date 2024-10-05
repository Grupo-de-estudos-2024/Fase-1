// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// let dia = new Date('2024-08-13T02:41:46.394Z')
let dia = new Date()
let horas = dia.getHours()
let minutos = dia.getMinutes()
let segundos = dia.getSeconds()
let horaDoDia = 'AM'
let dias = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
let diaSemana = dias[dia.getDay()]

console.log('Today is : ' + diaSemana)

if (horas < 12 && horas != 0) {
  horaDoDia = 'AM'
} else if (horas == 12) {
  horaDoDia = 'PM'
} else if (horas == 0) {
  horas = 12
} else {
  horaDoDia = 'PM'
  horas -= 12
}
console.log(
  'Current time is : ' +
    horas +
    ' ' +
    horaDoDia +
    ' : ' +
    minutos +
    ' : ' +
    segundos
)
