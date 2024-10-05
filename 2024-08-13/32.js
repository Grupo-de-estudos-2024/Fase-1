// Write a JavaScript program to find the closest value to 100 from two numerical values.

let numero1 = parseFloat(process.argv[2])
let numero2 = parseFloat(process.argv[3])

let diferenca1 = Math.abs(numero1 - 100)
let diferenca2 = Math.abs(numero2 - 100)

let maisProximo = diferenca1 < diferenca2 ? numero1 : numero2
console.log('O número mais próximo é', maisProximo)
