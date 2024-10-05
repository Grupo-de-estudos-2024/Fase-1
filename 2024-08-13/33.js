// Write a JavaScript program to check whether two
// numbers are in the range 40..60 or 70..100 inclusive

// let numero1 = parseFloat(process.argv[2])
// let numero2 = parseFloat(process.argv[3])

// let estaNoIntervalo = false
// if(numero1 <= 100 && numero2 <= 100){
//     if(numero1 >= 70 && numero2 >= 70){
//         console.log("Os numeros estão no intervalo")
//     } else if((numero1 >= 40 && numero1 <= 60) && (numero1 >= 40 && numero1 <= 60)){
//         console.log("Os numeros estão no intervalo")
//     }
//     console.log("Os numeros estão fora do intervalo")
// } else{
//     console.log("Os numeros estao fora do intervalo")
// }

// 45 60
// 75 77
// 50 80
// 10 110
// 45 110
// 20 75

// if (numero1 <= 100 && numero2 <= 100) {
//   if (numero1 >= 70 && numero2 >= 70) {
//     estaNoIntervalo = true
//   } else if (numero1 >= 40 && numero1 <= 60 && numero1 >= 40 && numero1 <= 60) {
//     estaNoIntervalo = true
//   }
// }

// if (!estaNoIntervalo) {
//   console.log('Os numeros estão no intervalo')
// } else {
//   console.log('Os numeros estao fora do intervalo')
// }

let numero1 = process.argv[2]
let numero2 = process.argv[3]
let primeiroIntervalo = numero1 >= 40 && numero1 <= 60
let segundoIntervalo = numero2 >= 40 && numero2 <= 60

if (primeiroIntervalo && segundoIntervalo) {
  console.log('Os números estão no intervalo')
} else {
  console.log('Os números não estão no intervalo')
}
