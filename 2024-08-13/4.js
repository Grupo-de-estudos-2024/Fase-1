// Write a JavaScript program to find the area of a
// triangle where three sides are 5, 6, 7
// Fórmula de Heron

// p = a+b+b /2

let a = 5
let b = 6
let c = 7

let p = (a + b + c) / 2

let area = p * (p - a) * (p - b) * (p - c)
let areaTotal = Math.sqrt(area)

console.log(areaTotal)
