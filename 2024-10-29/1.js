// Classe e objetos
// Classe -> formulário em branco
// Objeto -> formulário preenchido

class Animal {
  #nome
  constructor(nome) {
    this.#nome = nome
  }

  mover() {
    if (this.#nome == 'gato') console.log('O gato está correndo')
    else if ((this.#nome = 'passaro')) console.log('O passaro está voando')
    else console.log('O animal está de debatendo na boca da aninha')
  }

  trocarNome(novoNome) {
    this.#nome = novoNome
  }
}

class Funcionario {
  static multiplicadorBonus = 1.6

  constructor(nome, email, telefone, salario) {
    this.nome = nome + ' TESTE'
    this.email = email
    this.telefone = telefone
    this.salario = salario
  }

  calcularBonus() {
    // Política de bonus:
    // Salario * 1.6
    return this.salario * Funcionario.multiplicadorBonus
  }
}

let funcionario1 = new Funcionario(
  'peterson',
  'peterson@empresa.com',
  '12313213',
  10000
)
let funcionario2 = new Funcionario(
  'bruno',
  'bruno@empresa.com',
  '23212313213',
  20000
)
console.log(funcionario1)
console.log(funcionario2)

let animal1 = new Animal('gato')
console.log(animal1)
animal1.mover()

let animal2 = new Animal('passaro')
console.log(animal2)
animal2.mover()

// console.log(funcionario1)
// console.log(funcionario2)

// console.log(funcionario1.nome)
// console.log(funcionario2.nome)
