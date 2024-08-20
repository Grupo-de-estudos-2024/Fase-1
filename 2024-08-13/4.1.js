// Resolva o mesmo exercício de antes
// mas receba os valores dos lados pelo terminal
// Além disso, a fórmula de Heron só se aplica
// a triângulos escalenos. Portanto se os lados
// informados forem de um triângulo equilátero ou
// isoceles é necessário informar ao usuário que
// não é possível calcular a área

let ladoA = parseInt(process.argv[2])
let ladoB = parseInt(process.argv[3])
let ladoC = parseInt(process.argv[4])

if (ladoA != ladoB && ladoA != ladoC) {
  let p = (ladoA + ladoB + ladoC) / 2
  let area = p * (p - ladoA) * (p - ladoB) * (p - ladoC)
  let areaTotal = Math.sqrt(area)
  console.log('Area Total: ' + areaTotal)
} else {
  console.log('Não é possível calcular a area')
}
