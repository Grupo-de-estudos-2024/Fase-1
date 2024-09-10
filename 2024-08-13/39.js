// Write a JavaScript program to compute the sum of the two given integers.
// If the sum is in the range 50..80 return 65 otherwise return 80.

function somadeIntervalo(numero1, numero2) {
  let soma = numero1 + numero2
  if (soma >= 50 && soma <= 80) {
    return 65
  } else {
    return 80
  }
}

console.log(somadeIntervalo(25, 25))
console.log(somadeIntervalo(40, 40))
console.log(somadeIntervalo(10, 5))
