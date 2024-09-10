// Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
// If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
// If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

let pontosParametro = parseInt(process.argv[2])
let exameFinalParametro = process.argv[3] == 'final'

function passouComAMais(pontos, exameFinal) {
  if (exameFinal && pontos >= 90) {
    console.log(`O aluno passou no exame final com A+`)
    return true
  } else if (!exameFinal && pontos >= 89) {
    console.log(`O aluno passou com A+`)
    return true
  } else {
    console.log(`O aluno não tirou A+`)
    return false
  }
}

console.log(passouComAMais(pontosParametro, exameFinalParametro))
console.log(passouComAMais(50, true))
console.log(passouComAMais(90, true))
console.log(passouComAMais(89, false))
