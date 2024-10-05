// Write a JavaScript program to reverse a given string

function revertString(str) {
  let revertedStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    revertedStr += str.charAt(i)
  }
  return revertedStr
}

console.log(revertString('Gabi gatona'))
console.log(revertString('Paçoca gordo'))
