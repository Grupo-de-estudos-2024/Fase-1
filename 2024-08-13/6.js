// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let ano = parseInt(process.argv[2])

if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
  console.log('O ano é bissexto')
  return
}
console.log('O ano não é bissexto')

// if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
//   console.log('O ano é bissexto')
// } else {
//   console.log('O ano não é bissexto')
// }

function a() {
  return 'dasdas'
  console.log('outrotexto')
}
a
