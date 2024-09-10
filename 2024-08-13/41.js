// Write a JavaScript program to check a set of three numbers;
// if the three numbers are the same return 30;
// otherwise return 20;
// and if two numbers are the same return 40.

function verificarSemelhanca(numero1, numero2, numero3) {
  if (numero1 == numero2 && numero2 == numero3) {
    return 30
  } else if (numero1 == numero2 || numero2 == numero3) {
    return 40
  } else {
    return 20
  }
}
console.log(verificarSemelhanca(10, 10, 10))
console.log(verificarSemelhanca(10, 10, 22))
console.log(verificarSemelhanca(4, 10, 55))
