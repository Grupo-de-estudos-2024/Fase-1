// Write a JavaScript program that checks two integer values and returns true
// if either one is 15 or if their sum or difference is 15.

function compareWith15(number1, number2) {
  console.log(`Comparing: ${number1} ${number2}`)
  if (number1 == 15 || number2 == 15) {
    return true
  }
  if (number1 + number2 == 15) {
    return true
  }
  if (number1 - number2 == 15) {
    return true
  }
  return false
}

console.log(compareWith15(15, 15))
console.log(compareWith15(5, 10))
console.log(compareWith15(20, 5))
console.log(compareWith15(0, 1))
