// Overwriting

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

  fazerBarulho() {
    console.log(`Não se sabe qual barulho o animal ${this.especie} faz :c`)
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

  fazerBarulho() {
    this.miar()
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

  fazerBarulho() {
    console.log(`Auauauauau`)
  }
}

class Pincher extends Cachorro {
  constructor(nome) {
    super(nome)
    this.raiva = 'sim'
  }
}

const blibles = new Animal('Bibles', 'Desconhecida', 'De baixo da cama')
const pacoca = new Gato('Paçoca', 'curitiba')
const fred = new Gato('Fred', 'são Paulo')
const dogao = new Cachorro('Wolimar')
const dingo = new Pincher('Dingo')

blibles.fazerBarulho()
pacoca.fazerBarulho()
fred.fazerBarulho()
dogao.fazerBarulho()
dingo.fazerBarulho()

// nesse array só temos objetos da classe Animal
// const animais = [pacoca, fred, dogao]
// const a1 = animais[0]
// a1 instanceof Gato // true ou false
