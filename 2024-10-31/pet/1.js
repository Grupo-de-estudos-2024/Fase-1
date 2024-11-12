// Write a JavaScript program to create a class called "Person" with properties for name, age and country.
// Include a method to display the person's details. Create two instances of the 'Person' class and
// display their details.

class Person {
  constructor(name, age, country) {
    this.name = name
    this.age = age
    this.country = country
  }

  displayDetails() {
    console.log(
      `Person name: '${this.name}'. Age: ${this.age}. Country: '${this.country}'`
    )
  }
}

const joao = new Person('Joao da Silva', 44, 'Brasil')
const john = new Person('John Doe', 43, 'USA')
joao.displayDetails()
john.displayDetails()
