// Write a JavaScript program to check from three given numbers (non negative integers)
// that two or all of them have the same rightmost digit.
// 10 100 1000 -> true
// 15 25 33 -> true
// 10 11 12 -> false

function checkRightMostNumber(number1, number2, number3) {
  console.log(`Checking numbers ${number1} ${number2} ${number3}`)
  number1 = number1.toString()
  number2 = number2.toString()
  number3 = number3.toString()

  let lastChar1 = number1.charAt(number1.length - 1)
  let lastChar2 = number2.charAt(number2.length - 1)
  let lastChar3 = number3.charAt(number3.length - 1)
  if (
    lastChar1 == lastChar2 ||
    lastChar2 == lastChar3 ||
    lastChar1 == lastChar3
  ) {
    return true
  }
  return false
}

console.log(checkRightMostNumber(10, 100, 1000))
console.log(checkRightMostNumber(15, 25, 33))
console.log(checkRightMostNumber(10, 11, 12))
