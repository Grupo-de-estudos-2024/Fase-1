class Conta {
  #senha

  constructor(cornoName, senha) {
    this.cornoName = cornoName
    this.saldo = 0
    this.#senha = senha
  }
}

// Imagina que não estamos vendo a senha
const conta1 = new Conta('Lucas', '123456')
console.log(conta1)
