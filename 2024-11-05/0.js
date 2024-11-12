// Herança

class Animal {
  constructor(nome, especie, bioma) {
    this.nome = nome
    this.especie = especie
    this.bioma = bioma
  }

  imprimirNome() {
    console.log(this.nome)
  }

  imprimirBioma() {
    console.log(`O animal ${this.especie} vive no ${this.bioma}`)
  }
}

class Gato extends Animal {
  constructor(nome, bioma) {
    // Poderia ter mais lógica
    super(nome, 'Gato', bioma)
  }

  miar() {
    console.log(`O gato ${this.nome} diz: 'Miauuu'`)
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome, 'Cachorro', 'Doméstico')
    this.buracosCavados = 0
  }

  cavarBuraco() {
    this.buracosCavados++
    console.log(`O cachorro ${this.nome} cavou ${this.buracosCavados} buracos`)
  }
}

class Pincher extends Cachorro {
  constructor(nome) {
    super(nome)
    this.raiva = 'sim'
  }
}

const pacoca = new Gato('Paçoca', 'curitiba')
pacoca.imprimirNome()
pacoca.miar()
pacoca.imprimirBioma()

const fred = new Gato('Fred', 'são Paulo')
fred.imprimirBioma()

const dogao = new Cachorro('Wolimar')
dogao.imprimirNome()
dogao.cavarBuraco()
dogao.cavarBuraco()
dogao.cavarBuraco()
dogao.imprimirBioma()

// nesse array só temos objetos da classe Animal
const animais = [pacoca, fred, dogao]
const a1 = animais[0]
a1 instanceof Gato // true ou false
