// Write a JavaScript program that evaluates three given integers to determine
// if any one of them is greater than or equal to 20
// and less than at least one of the other two.
// 1 15 30 -> false
// 1 20 30 -> true

function checkIfBiggerThan20ButNotTheGreatest(x, y, z) {
  console.log(`Checking numbers ${x} ${y} ${z}`)
  if (x >= 20 && (x < y || x < z)) {
    return true
  }
  if (y >= 20 && (y < x || y < z)) {
    return true
  }
  if (z >= 20 && (z < x || z < y)) {
    return true
  }
  return false
}

console.log(checkIfBiggerThan20ButNotTheGreatest(1, 15, 30))
console.log(checkIfBiggerThan20ButNotTheGreatest(1, 20, 30))
