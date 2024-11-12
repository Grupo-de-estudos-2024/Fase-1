// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
// Include two methods to calculate rectangle area and perimeter.
// Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Retangulo {
  constructor(largura, altura) {
    this.largura = largura
    this.altura = altura
  }

  calcularArea() {
    return this.altura * this.largura
  }

  calcularPerimetro() {
    return (this.altura + this.largura) * 2
  }
}

let quadraDeFutebol = new Retangulo(105, 68)
quadraDeFutebol.calcularArea()
console.log(quadraDeFutebol.calcularArea())
console.log(quadraDeFutebol.calcularPerimetro())
