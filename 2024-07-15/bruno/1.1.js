// 01- Escreva um programa que imprima os primeiros 10 números de Fibonacci

// A sequência de Fibonacci é um padrão numérico em que o primeiro e o segundo termo são iguais
// a 1 e cada termo a partir do terceiro é a soma dos dois termos anteriores. Na sequência de Fibonacci, cada número é a soma dos seus dois antecessores.

//1 1 2 3 5 8 13 21 34 55

let n = 10
let fibonacci = []

fibonacci[0] = 1 // primeiro número da sequência
fibonacci[1] = 1 // segundo número da sequência

let i = 2
while (i < n) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]

  i++ // Incrementa o índice para calcular o próximo número
}

console.log('Os 10 primeiros números de fibonacci São ' + fibonacci) // Imprime o array com os dez números

// se o console log estuver dentro do while (fibinacci[i], ele imprimirá os números em sequência).
