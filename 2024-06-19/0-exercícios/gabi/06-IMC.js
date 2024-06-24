// Escreva um programa que receba um peso
// e um altura como parâmetros e imprima o IMC
// (peso / altura ^ 2)
// Depois imprima a classificação da pessoa:
// MENOR QUE    18,5	        NORMAL	0
// ENTRE        18,5 E 24,9	    NORMAL	0
// ENTRE        25,0 E 29,9	    SOBREPESO	I
// ENTRE        30,0 E 39,9	    OBESIDADE	II
// MAIOR QUE    40,0	        OBESIDADE	III

let peso = parseInt(process.argv[2])
let altura = parseFloat(process.argv[3])
let imc = peso / altura ** 2
let resultado

if (imc < 18.5) {
  resultado = 'BAIXO'
} else if (imc >= 18.5 && imc <= 24.9) {
  resultado = 'NORMAL'
} else if (imc >= 25 && imc <= 29.9) {
  resultado = 'SOBREPESO'
} else if (imc >= 30 && imc <= 39.9) {
  resultado = 'OBESIDADE II'
} else {
  resultado = 'OBESIDADE III'
}

console.log(resultado)
