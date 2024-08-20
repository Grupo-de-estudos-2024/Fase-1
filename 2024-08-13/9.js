// Write a JavaScript program to calculate the days left before Christmas.

let hoje = new Date()
let natal = new Date()
natal.setDate(25)
natal.setMonth(11)
let diferencaMilisegundos = natal.getTime() - hoje.getTime()
let dias = diferencaMilisegundos / 1000 / 60 / 60 / 24
console.log('faltam ' + dias + ' para o natal')
