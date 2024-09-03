// Write a JavaScript program to create another string by adding "Py" in front of a given string.
// If the given string begins with "Py" return the original string.

let texto = process.argv[2]
if (!texto.startsWith('Py')) texto = 'Py' + texto
console.log(texto)
