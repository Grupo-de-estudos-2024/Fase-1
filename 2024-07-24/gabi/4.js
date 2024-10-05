// 4- Escreva um programa que receba um texto e imprima cada um dos caracteres individualmente

let texto = process.argv[2]

for (let i = 0; i < texto.length; i++) {
  let caracterAtual = texto.charAt(i)
  console.log(caracterAtual)
}
