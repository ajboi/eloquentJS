// function counter () {
//   let count = 0
//   return function () {
//     count += 1
//     return count
//   }
// }

// var firstIncrementor = counter()
// console.log(firstIncrementor())
// console.log(firstIncrementor())

// var secondIncrementor = counter()
// console.log(secondIncrementor())
// console.log(firstIncrementor())

// var result = (function multiply () {
//   var x = 20
//   var y = 20
//   var answer = x * y
//   console.log(answer)
// //   return answer
// })()
// console.log(result)

function findSolution (target) {
  function find (current, history) {
    if (current == target) {
      return history
    } else if (current > target) {
      return null
    } else {
      return find(current + 5, `(${history} + 5)`) ||
    find(current * 3, `(${history} * 3)`)
    }
  }
  return find(1, '1')
}
console.log(findSolution(14))
// ! (((1 * 3) + 5) * 3)
