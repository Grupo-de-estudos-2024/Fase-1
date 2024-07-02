let i = 0
let contador = 0
while (i <= 1000) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i)
    contador += i
  }
  i++
}
console.log(contador)
