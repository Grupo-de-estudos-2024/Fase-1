// Write a JavaScript program where the program takes a random integer between 1 and 10,
// and the user is then prompted to input a guess number.
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// pq nao vem 10?
// como resolver o intervalo (que deveria ser de 1 a 10)
// 0 - 9
// 1 - 10

let opcao = process.argv[2]
let aleatorio = Math.floor(Math.random() * 10) + 1

console.log('aleatorio ' + aleatorio)
if (opcao == aleatorio) {
  console.log('Good Work')
} else {
  console.log('Not matched')
}
