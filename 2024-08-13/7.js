// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
//2014 - 2050

for (let i = 2014; i <= 2050; i++) {
  let date = new Date()
  date.setHours(12)
  date.setDate(1)
  date.setMonth(0)
  date.setFullYear(i)
  let diaDaSemana = date.getDay()
  let resultado =
    '0' + date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear()
  if (diaDaSemana == 0) {
    console.log(resultado + ' È domingo')
  } else {
    console.log(resultado + ' Não é domingo')
  }
}
