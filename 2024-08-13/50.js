// Write a JavaScript program to capitalize the first
// letter of each word in a given string.

function capitalizeString(str) {
  let split = str.split(' ')
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].substring(1)
  }
  return split.join(' ')
}
console.log(capitalizeString('a gabi é muito bonita'))
console.log(capitalizeString('o paçoca é gordo'))
