// 14. Write a JavaScript exercise to get the filename extension.

let caminhoCompleto = process.argv[1]
console.log('O caminho completo é', caminhoCompleto)

// let nomeArquivo = ''
// for (let i = 0; i < caminhoCompleto.length; i++) {
//   let caracterAtual = caminhoCompleto.charAt(i)
//   if (caracterAtual == '.') {
//     nomeArquivo = ''
//   } else {
//     nomeArquivo += caracterAtual
//   }
// }
// console.log('A extensão do arquivo é:', nomeArquivo)

let ultimoIndexPonto = caminhoCompleto.lastIndexOf('.')
console.log(ultimoIndexPonto)
let extensao = caminhoCompleto.substring(ultimoIndexPonto + 1)
console.log('A extensão do arquivo é:', extensao)
