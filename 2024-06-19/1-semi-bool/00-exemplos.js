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
}
// A linha abaixo daria erro em linguagens mais restritas
if ('um texto qualquer') {
}

// Entretanto, em JS, o if aceita qualquer tipo de dados
// 
