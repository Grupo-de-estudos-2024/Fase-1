// Write a JavaScript program to check two given
// non-negative integers if one (not both) is a multiple of 7 or 11.

let numero1 = parseInt(process.argv[2])
let numero2 = parseInt(process.argv[3])

let numero1isMultiple = numero1 % 7 == 0 || numero1 % 11 == 0
let numero2isMultiple = numero2 % 7 == 0 || numero2 % 11 == 0

if (
  (numero1isMultiple && !numero2isMultiple) ||
  (!numero1isMultiple && numero2isMultiple)
) {
  console.log('Um dos números é multiplo de 7 ou 11')
} else {
  console.log('Ou nenhum dos números é múltiplo de 7 ou 11 Ou os dois são')
}

// 7 15 -> true
// 7 11 -> false
// 2 11 -> true
// 15 30 -> false

// if((numero1 % 7 == 0 || numero1 % 11 == 0) || (numero2 % 7 == 0 || numero2 % 11 == 0)){
//     console.log("è um multiplo de 7 e 11")
// } else {
//     console.log("Não è um multiplo de 7 e 11")
// }

// if((numero1 % 7 != 0 || numero1 % 11 != 0) || (numero2 % 7 != 0 || numero2 % 11 != 0)){
//     console.log("Não é um múltiplo de 7 e 11")
//     return
// } else if()
