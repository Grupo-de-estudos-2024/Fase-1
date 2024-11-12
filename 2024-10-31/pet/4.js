// Write a JavaScript program that creates a class called "BankAccount" with properties for
// account number and balance. Include methods to deposit and withdraw money from the account.
// Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  static #account_count = 0
  static #special_margin = 30

  constructor() {
    this.balance = 0
    this.accountId = `pvg-${BankAccount.#account_count}`
    BankAccount.#account_count++
  }

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    if (this.balance - amount < -BankAccount.#special_margin) {
      console.log(`The account ${this.accountId} does not have enough balance.`)
      return
    }
    this.balance -= amount
  }
}

const conta1 = new BankAccount()
const conta2 = new BankAccount()

console.log('conta1')
console.log(conta1)
conta1.deposit(100)
console.log(conta1)
conta1.deposit(200)
console.log(conta1)
conta1.withdraw(500)
console.log(conta1)
conta1.withdraw(330)
console.log(conta1)
console.log('conta2')
console.log(conta2)
