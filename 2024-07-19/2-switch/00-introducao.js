// https://www.w3schools.com/js/js_switch.asp

let nome = 'bruno'
// ===
switch (nome) {
  case 'pet':
  case 'victor':
  case 'gama':
    console.log('o pet é legal')
    break
  case 'gabi':
  case 'dutra':
    console.log('o gabi é legal')
    break
  case 'bruno':
  case 'ramos':
    console.log('o bruno é legal')
    break
  default:
    console.log('não sei quem é, mas é legal')
}

// depois do break
console.log('depois do break')
