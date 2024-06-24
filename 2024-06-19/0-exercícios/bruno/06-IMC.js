// Escreva um programa que receba um peso
// e um altura como parâmetros e imprima o IMC
// (peso / altura ^ 2) (altura em metro)
// Depois imprima a classificação da pessoa:
// MENOR QUE    18,5	        NORMAL	0
// ENTRE        18,5 E 24,9	    NORMAL	0
// ENTRE        25,0 E 29,9	    SOBREPESO	I
// ENTRE        30,0 E 39,9	    OBESIDADE	II
// MAIOR QUE    40,0	        OBESIDADE	III

let Peso = parseInt(process.argv[2])
let Altura = parseFloat(process.argv[3]) // em metros

// let IMC = (Peso/Altura ^ 2) * 100
let IMC = Peso / (Altura * Altura)

if (IMC < 18.5) console.log(' Normalzin ')
else if (IMC >= 18.5 && IMC <= 24.9) console.log(' Normal ')
else if (IMC >= 25.0 && IMC <= 29.9) console.log(' Sobrepeso ')
else if (IMC >= 30 && IMC <= 39.9) console.log('quase um paçoca')
else console.log('paçoca')
