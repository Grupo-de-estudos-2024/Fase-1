// Write a JavaScript program to check whether a given number exists
// in the range 40..10000.  For example 40 presents in 40 and 4000

function verifyNumberRange(number) {
  return number >= 40 && number <= 10000
}

console.log(verifyNumberRange(40))
console.log(verifyNumberRange(39))
console.log(verifyNumberRange(5000))
console.log(verifyNumberRange(10000))
console.log(verifyNumberRange(10001))
console.log(verifyNumberRange(9999))
