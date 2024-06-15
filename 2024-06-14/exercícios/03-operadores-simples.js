// Ignore as linhas abaixo
let meuNumeroSoma = 10
let meuNumeroSubtracao = 8
let meuNumeroMultiplicacao = 7
let meuNumeroDivisao = 8
let meuNumeroExponenciacao = 2
let meuNumeroIncremento = 3
let meuNumeroDecremento = 4
// 1- Reescreva as seguintes linha usando a sintaxe contraída
meuNumeroSoma = meuNumeroSoma + 10
meuNumeroSoma += 10

meuNumeroSubtracao = meuNumeroSubtracao - 5
meuNumeroSubtracao -= 5

meuNumeroMultiplicacao = meuNumeroMultiplicacao * 2
meuNumeroMultiplicacao *= 2

meuNumeroDivisao = meuNumeroDivisao / 2
meuNumeroDivisao /= 2

meuNumeroExponenciacao = meuNumeroExponenciacao ** 3
meuNumeroExponenciacao **= 3

meuNumeroIncremento = meuNumeroIncremento + 1
meuNumeroIncremento += 1
meuNumeroIncremento++
++meuNumeroIncremento

meuNumeroDecremento = meuNumeroDecremento - 1
meuNumeroDecremento -= 1
meuNumeroDecremento--
--meuNumeroDecremento

// 2- Qual o valor das seguintes expressões?
1 > 2 // false
3 < 4 // true
1 >= 2 // false
4 <= 4 // true
1 == 2 // false
2 != 2 // false
1 === 2 // false
2 !== 2 // false
'oi, eu sou o ' + 'goku' // 'oi, eu sou o goku'

// 3- Desenhe (ou escreva de alguma forma) a tabela verdade.
// Utilize os operadores lógicos &&, || e !
// R:
// P    Q   (P && Q)   (P || Q)   !P   !Q
// ========================================
// V    V   V          V          F    F
// V    F   F          V          F    V
// F    V   F          V          V    F
// F    F   F          F          V    V
