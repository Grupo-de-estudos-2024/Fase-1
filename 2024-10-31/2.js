// Exercicio 0.1: Crie uma classe que represente um animal
// O animal deve ter um nome e especie
// e também uma quantidade de alimento
// o animal pode se mover e isso gasta alimento
// e o animal pode comer e isso ganha alimento

class Animal {
  constructor(nome, especie) {
    this.nome = nome
    this.especie = especie
    this.alimentoPercentual = 100
    console.log(`O animal ${this.nome} foi criado! Ele é um ${this.especie}`)
  }

  mover() {
    this.alimentoPercentual -= 15
    console.log(`O animal ${this.nome} se moveu...`)
    console.log(`E resta ${this.alimentoPercentual}% de alimento`)
  }

  comer() {
    this.alimentoPercentual = 100
    console.log(`O animal ${this.nome} comeu e está cheio!`)
  }
}

const pacoca = new Animal('pacoca', 'gato')
const bartossauro = new Animal('bartossauro', 'peixe')
pacoca.mover()
pacoca.mover()
// AQUI
pacoca.mover()
pacoca.mover()
pacoca.comer()
pacoca.mover()
bartossauro.mover()
bartossauro.mover()
bartossauro.mover()
bartossauro.mover()
