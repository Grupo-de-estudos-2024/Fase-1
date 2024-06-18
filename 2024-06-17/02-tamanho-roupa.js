// Escreva um script
// que dado o nome de um usuário
// mostre o tamanho da roupa do usuário
// no console
let nomeDoUsuario = process.argv[2]
let tamanhoRoupa = 'desconhecido'

if (nomeDoUsuario === 'gabi') {
  tamanhoRoupa = 'pequena'
} else if (nomeDoUsuario === 'pet') {
  tamanhoRoupa = 'média'
} else if (nomeDoUsuario === 'bruno') {
  tamanhoRoupa = 'grande'
}

console.log('o tamanho da roupa do ' + nomeDoUsuario + ' é ' + tamanhoRoupa)
