// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#removing_items
// Leitura até 'Accessing every item

// Coisas não mencionada anteriormente:

// Como encontrar o índice de um elemento:
console.log('------------ Como encontrar o índice de um elemento -----------')
let meuArray = ['Bruno', 'Gabi', 'Pet']
let posicaoBruno = meuArray.indexOf('Bruno')
let posicaoGabi = meuArray.indexOf('Gabi')
console.log('posicaoBruno', posicaoBruno)
console.log('posicaoGabi', posicaoGabi)

// Como adicionar um elemento ao começo do array:
console.log('--------------- Adicionando elemento ao começo ---------------')
let meuArray2 = ['pacoca', 'aninha', 'pacoca do vizinho']
console.log('antes de adicionar ao começo', meuArray2)
meuArray2.unshift('outro gato do vizinho')
console.log('pós adição', meuArray2)

// Como remover itens
console.log('--------------- Remoção de itens ---------------')
let meuArrayGrande = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
console.log('antes de remover do final', meuArrayGrande)
meuArrayGrande.pop()
console.log('pós remover do final usando .pop()', meuArrayGrande)
meuArrayGrande.shift()
console.log('pós remover do final usando .shift()', meuArrayGrande)
meuArrayGrande.splice(5, 3)
console.log('pós remover usando .splice(5, 3)', meuArrayGrande)
meuArrayGrande.splice(1, 3)
console.log('pós remover usando .splice(1, -3)', meuArrayGrande)
