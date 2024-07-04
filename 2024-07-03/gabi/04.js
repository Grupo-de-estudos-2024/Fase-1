let numero = parseInt(process.argv[2])
let i = 0
let j = 1
let fatorial = numero

// while (i < numero) {
//   console.log('MAIOR')
//   while (j < numero) {
//     console.log('menor')
//     fatorial *= j
//     j++
//   }
//   i++
// }

while (j < numero) {
  fatorial *= j
  j++
}
console.log(fatorial)
