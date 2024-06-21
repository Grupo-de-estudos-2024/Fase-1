// Na maioria das linguagens de programação, o if
// (e outras estruturas de controle) só aceitam valores
// estritamente booleanos (true e false).

// O true poderia ser substituído por qualquer expressão booleana
if (true) {
  // código a ser executado
}

// O false poderia ser substituído por qualquer expressão booleana
if (false) {
  // código a ser ignorado
}

// Ou seja, qualquer outro tipo de dados causaria um erro
// A linha abaixo daria erro em linguagens mais restritas
if (15) {
  console.log('oi')
}
// A linha abaixo daria erro em linguagens mais restritas
if ('um texto qualquer') {
}

// Entretanto, em JS, o if aceita qualquer tipo de dados
// para isso funcionar, qualquer valor que não seja booleano será
// convertido para um 'semi-booleano', conhecido como 'truthy' ou 'falsy'
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// Isso pode ser usado para escrever algumas verificações com mais facilidade:
let meuTexto = 'adasdasda'

// verificando se texto foi preeenchido
if (meuTexto) {
  // Texto foi preeenchido
} else {
  // Texto não foi preeenchido
}

// verificando se número é diferente de zero
let caixas = 0
if (caixas) {
  // Existe um número de caixas diferente de 0
} else {
  // Não existem caixas (temos 0 caixas)
}

let meuGato = null // poderia ser undefined
if (meuGato) {
  // Existe um gato
} else {
  // Não existe um gato
}

// Caso se utilize os operadores lógicos &&, || e !
// Type coercion é feito automaticamente
// com valores não booleanos, estes serão convertidos
// para um 'semi-booleano' e o resultado será booleano
// Exemplos:
let meuOutroTexto = ''
if (!meuOutroTexto) {
  // meuOutroTexto não foi preenchido
} else {
  // meuOutroTexto foi preenchido
}

// As duas linhas abaixo são equivalentes
let idade = 0
if (idade == 0) console.log('idade é zero')
if (!idade) console.log('idade é zero')

let meuOutroNumero = 0
let aindaOutroNumero = 10
if (meuOutroNumero || aindaOutroNumero) {
  // Existe um número diferente de zero
}

if (meuOutroNumero && aindaOutroNumero) {
  // ambos número são diferentes de zero
}
