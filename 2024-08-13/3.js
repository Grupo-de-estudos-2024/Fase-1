// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date = new Date()
let dia = date.getDate()
let mes = date.getMonth() + 1
let ano = date.getFullYear()

if (dia < 10) {
  dia = '0' + dia
}
if (mes < 10) {
  mes = '0' + mes
}

let resultado = dia + '-' + mes + '-' + date.getFullYear()

let resultado2 = dia + '/' + mes + '/' + date.getFullYear()
console.log(resultado + ', ' + resultado2)
