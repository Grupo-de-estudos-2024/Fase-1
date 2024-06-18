console.log(process.argv)
let idade = process.argv[2]
idade = parseInt(idade)

if (idade < 10) {
  console.log('criança')
} else if (idade < 20) {
  console.log('jovem')
} else if (idade < 30) {
  console.log('adulto')
} else {
  console.log('idoso')
}
