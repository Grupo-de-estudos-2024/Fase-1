// Variáveis de contexto são variáveis que estão disponíveis
// sem precisarem ser declaradas e tem relação com o contexto
// específico onde o javascript está sendo executado
// Por exemplo, no browser temos a variável window que tem dados
// da janela do browser atualmente aberta.
// Enquanto no NodeJS (que é executado no terminal) temos
// a variável process que tem dados do processo atual.

// Argv é uma propriedade da variável process que contém
// os argumentos passados para o script
// O primeiro valor sempre será o caminho do executável (no nosso caso, o node)
// O segundo valor sempre será o caminho do script (o arquivo atual ou sendo executado)

console.log(process.argv)
let caminhoNode = process.argv[0]
let caminhoScript = process.argv[1]

let primeiroArgumentoDoScript = process.argv[2]
let segundoArgumentoDoScript = process.argv[3]

console.log(primeiroArgumentoDoScript)
console.log(segundoArgumentoDoScript)

// No futuro, para passar valores para os nossos scripts
// utilizaremos o argv, portanto, concretamente, copiaremos
// e colaremos o seguinte trecho para a maioria dos nosso scripts:
let primeiroArgumento = process.argv[2]
// No caso de um script que recebe dois argumentos, também
// utilizaremos a seguinte linha:
let segundoArgumento = process.argv[3]
