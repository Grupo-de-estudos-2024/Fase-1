// Objetos (objects)
let meuArray = ['Bruno', 'Gabi', 'Pet']
let objecto = {
  local: 'São Paulo',
  idade: 25,
  nome: 'João',
  sexo: 'Masculino',
  dataNascimento: '1990-01-01',
  orgaoEmissor: 'SSSP',
}
// Acessar valores
console.log(meuArray[0])
console.log(objecto.idade)
console.log(objecto.local)

// Atribução
meuArray[0] = 'novo valor'
console.log(meuArray)
objecto.nome = 'José Maria'
console.log(objecto)

// Objetos podem ser aninhados
let meuObjectoAninhado = {
  nome: 'Bruno',
  idade: 25,
  gato: {
    nome: 'Gabi',
    idade: 5,
    sexo: 'Masculino',
  },
}

// Como transformar um objeto em uma string
let meuNovoObjeto = { modelo: 'sedan', ano: 2021, cor: 'preto' }
console.log('esse é meu carro:' + meuNovoObjeto)
// Para transformar um objeto em uma string é possível transformá-lo em um JSON
let texto = JSON.stringify(meuNovoObjeto)
console.log('esse é meu carro: ' + texto)

// https://www.w3schools.com/js/js_objects.asp

// declarando objeto vazio e depois o preenchendo
let objetoVazio = {}
objetoVazio.nome = 'Guilherme'
console.log(objetoVazio)

// Acessando propriedades de um objeto com sintaxe de colchete
let objeto = {
  nome: 'Guilherme',
  idade: 25,
  sexo: 'Masculino',
  local: 'São Paulo',
  orgaoEmissor: 'SSSP',
}
console.log(objeto.nome)
console.log(objeto['nome'])

// let propriedadeQueMeInteressa = 'sexo'
// console.log(objecto[propriedadeQueMeInteressa])
// console.log(objecto['local'])

// https://www.w3schools.com/js/js_object_property.asp
// Deleção de prop
let sofa = {
  tamanho: 1.8,
  cor: 'preto',
  assentos: 3,
  profundida: 0.5,
  tecido: 'couro fake',
}
console.log(sofa)
delete sofa.assentos
console.log(sofa)

// https://www.w3schools.com/js/js_object_display.asp
// [...]

// Realizar exercícios:
// https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1
// Exercícios 1, 2, 6,
// https://launchschool.com/books/javascript/read/objects

// Objeto com props estranhas
let objetoEstranho = {
  1: 'um',
  1: 'um assim',
  undefined: 'undefined valor',
  'hello world': 123,
  true: 'algum valor no true',
  true: 'algum valor no true22',
}
console.log(objetoEstranho)
console.log(objetoEstranho['hello world'])
