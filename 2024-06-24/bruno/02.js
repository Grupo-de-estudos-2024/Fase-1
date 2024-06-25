// 2 - Crie um programa que recebe a cor de um semáforo e
// imprima a ação correspondente

let cor = process.argv[2]
cor = cor.toLowerCase()

switch (cor) {
  case 'verde':
    console.log('Prossiga')
    break
  case 'vermelho':
    console.log('pare!')
    break
  case 'amarelo':
    console.log('Atenção')
    break
  default:
    console.log('Farol quebrado, chama o detran.')
}
