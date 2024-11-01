// this

class Funcionario {
  constructor(nome) {
    this.nome = nome
  }

  imprimirNome() {
    console.log(this.nome)
  }
}

const funcionario1 = new Funcionario('Peterson')
const funcionario2 = new Funcionario('Bruno')
const funcionario3 = new Funcionario('Lucas')

funcionario1.imprimirNome()
funcionario2.imprimirNome()
funcionario3.imprimirNome()
// console.log(instance.publicMethod()) // "hello world"
