// Write a JavaScript program to replace every character in a
// given string with the character following it in the alphabet.
// gabriela -> hbcsjfmb

function replaceStringCharacter(string) {
  let newString = ''
  for (let i = 0; i < string.length; i++) {
    let nextCharNumber = string.charCodeAt(i) + 1
    let nextChar = String.fromCharCode(nextCharNumber)
    newString += nextChar
  }
  return newString
}

console.log(replaceStringCharacter('gabriela'))
