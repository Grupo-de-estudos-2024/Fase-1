// Tipos complexos de variáveis
// Arrays e os objects
// Vetor e objeto

// Nesse arquivo vamos aprender sobre arrays

// Digamos que queremos representar um RG num programa com as seguintes informações:
// Nome, rg, local de nascimento, data de nascimento, sexo, orgão emissor
// Informações do RG:
let nome = 'Peterson v gama'
let numeroRg = '12345678901'
let localDeNascimento = 'São Paulo'
let dataDeNascimento = '1990-01-01'
let sexo = 'Masculino'
let orgaoEmissor = 'SSSP'
let rg = [
  'Peterson',
  '132456789',
  'São Paulo',
  '1990-01-01',
  'Masculino',
  'SSSP',
]
console.log(rg)
let nomeDoMarginal = rg[0]
console.log('nomeDoMarginal', nomeDoMarginal)
let sexoDoMarginal = rg[4]
console.log('sexoDoMarginal', sexoDoMarginal)

// Array (ou vetor)
// Um array é uma coleção de elementos, acessado por index (posição)
let variavelLegal = ['a', 'b', 'c']
console.log(variavelLegal)
let novaVariavel = variavelLegal[0] + ' ' + variavelLegal[2]
console.log(novaVariavel)
console.log(variavelLegal[0])
console.log(variavelLegal[2])

// Qual a diferença entre uma posição e um index?
// Posição começa a se contar em 1
// Index começa a se contar em 0
let primeiroElemento = variavelLegal[0]
// Abaixo está errado, pois o primeiro elemento fica no index 0
let primeiroElementoErrado = variavelLegal[1]

let arrayNumerico = [132131, 32121321, 32122, 998, 1337, 420, 69]
console.log('arrayNumerico', arrayNumerico)

let arrayHeterogeneo = [13, 'pet', true, false, null, undefined, 1337]
console.log('arrayHeterogeneo', arrayHeterogeneo)

// Arrays podem ter valores complexos dentros deles
let arrayComplexo = [1, 'pet', [1, 2, 3], 10, variavelLegal]
console.log('arrayComplexo', arrayComplexo)

// Preenchendo array com valores
let arrayVazio = []
console.log(arrayVazio)
arrayVazio[0] = 'a'
console.log(arrayVazio)
arrayVazio[1] = 'b'
console.log(arrayVazio)

// Sobreescrevendo valores de um array
let novoArray = ['Bruno', 'Gabi', 'Pet']
console.log('novoArray', novoArray)
novoArray[2] = 'Pacoca'
console.log('novoArray', novoArray)
let variavelString = novoArray.toString()
variavelString = variavelString + ' outro texto'
console.log('variavelString', variavelString)

console.log(novoArray.length)

// Acessando último index do array
let meuArray = [
  23, 1, 321, 31, 3, 21, 321, 3, 21, 321, 3, 1, 321, 321, 3, 1, 312, 31, 312,
  31, 321,
]
console.log('tamanho do array', meuArray.length)
console.log('último index do array', meuArray.length - 1)
console.log('valor no primeiro index', meuArray[0])
let meuUltimoIndex = meuArray.length - 1
console.log('valor do último index', meuArray[meuUltimoIndex])
// Versão menor
console.log('valor do último index', meuArray[meuArray.length - 1])

// Ordenação de array
let novoArray = [1, 2, 9, 5, 6, 19, 29, 30, 5, -1, -2, -3, 0.7]
console.log(novoArray)
novoArray.sort()
console.log(novoArray)

let arrayDesordenado = [9, 3, 2, 1, 6, 7, 5, 4, 8, 0]
console.log(arrayDesordenado)
arrayDesordenado.sort()
console.log(arrayDesordenado)

// Adicionando um valor ao final do array
let meuArrayQueVouAdicionar = [1, 2, 3, 4, 5]
console.log('meuArrayQueVouAdicionar', meuArrayQueVouAdicionar)
meuArrayQueVouAdicionar.push('banana')
console.log('meuArrayQueVouAdicionar', meuArrayQueVouAdicionar)

let meuArray2 = ['Zebra', 'Tartartaruga', 'Macaco']
meuArray2.push('Leão')
console.log(meuArray2)

let filaDaCaixa = ['Bruno', 'Gabi', 'Pet']
filaDaCaixa.push('Maria')
console.log(filaDaCaixa)
console.log('Gabi')
