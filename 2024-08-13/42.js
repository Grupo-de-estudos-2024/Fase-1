// Write a JavaScript program to check whether three given numbers
// are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 :
// Soft mode -> 22, 22, 31 (allows repeated numbers)
// Not in increasing order -> 24, 22, 31

function isIncreasing(x, y, z) {
  console.log(`Checking numbers ${x} ${y} ${z}`)
  if (z > y && y > x) {
    return 'strict mode'
  }
  if (z >= y && y >= x) {
    return 'soft mode'
  }
  return 'not increasing'
}

console.log(isIncreasing(10, 15, 31))
console.log(isIncreasing(22, 22, 31))
console.log(isIncreasing(22, 21, 31))
