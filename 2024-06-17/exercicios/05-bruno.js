// Escreva um script que receba dois números de parametro
// e mostre a soma desses números no console
// Caso seja um número negativo, mostre 'negativo'
// Caso seja um número positivo, mostre 'positivo'

let numeroUm = process.argv[2]
let numeroDois = process.argv[3]
let soma = parseInt(numeroUm) + parseInt(numeroDois)
let resultado
console.log(soma)
if (soma < 0) 
    {  resultado = 'negativo' } 
else if (soma > 0) 
    {  resultado = 'positivo' }
console.log(resultado)
