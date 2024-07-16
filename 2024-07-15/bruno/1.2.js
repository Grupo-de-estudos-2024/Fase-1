// 02- Escreva um programa que receba um número inteiro de parâmetro
// e imprima se o número é primo

// 06- Escreva um programa que receba um número inteiro de parâmetro
// e imprima se o número é primo

// let numero = parseInt(process.argv[2])

// if (numero %1 == 0 || numero%numero == 0 ) console.log ( "O número "+ numero + " é primo")
//     else console.log("insira outro número")

let num = parseInt(process.argv[2])

if (num <= 1) {
  console.log(num + ' não é primo')
} else {
  let contagem = 2

  while (contagem < num) {
    if (num % contagem === 0) {
      console.log(num + ' não é primo')
      return // Termina a execução do programa após imprimir
    }
    contagem++
  }

  console.log(num + ' é primo')
}
