// Escreva um programa que ao executado
// deve cumprimentar conforme o horário atual
// De manhã: 'Bom dia!'
// De tarde: 'Boa tarde!'
// De noite: 'Boa noite!'
// Protip: pesquise e utilize a função 'new Date()' e 'getHours()'

let hoje = new Date()
let hora = hoje.getHours()

if (hora >= 4 && hora <= 12) {
  console.log('Bom dia')
} else if (hora >= 13 && hora < 18) {
  console.log('Boa tarde')
} else {
  console.log('Boa noite')
}
