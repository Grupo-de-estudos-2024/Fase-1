// 2 - Crie um programa que recebe a cor de um semáforo e
// imprima a ação correspondente

let corSemaforo = process.argv[2]

switch (corSemaforo.toLowerCase()) {
  case 'vermelho':
    console.log('PARE')
    break
  case 'amarelo':
    console.log('AGUARDE')
    break
  case 'verde':
    console.log('SIGA')
    break
  default:
    console.log('Cor inválida')
}

console.log('valor digitado: ' + corSemaforo)
