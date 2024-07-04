// 02- Imprima a tabuada de 1 a 10
// 1x1 = 1
// 1x2 = 2
// ... até 1x10 = 10
// 2x1 = 2
// 2x2 = 4
// ... até 2x10 = 20
// ... até 10x10 = 100

let numero = 1

while (numero <= 10) {
  let tabuada = 1
  while (tabuada <= 10) {
    let i = numero * tabuada //i = resultado da tabuada
    console.log(numero + 'x' + tabuada + '=' + i)
    tabuada++
  }
  numero++
}
