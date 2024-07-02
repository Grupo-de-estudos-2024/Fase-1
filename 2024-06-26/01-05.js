// 05- Escreva um programa que use loops para imprimir o seguinte padrão:
/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */

let i = 1
let texto = '1'
while (i <= 8) {
  console.log(texto)
  i++
  texto = texto + ' ' + i
}
