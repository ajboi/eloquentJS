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

// function findSolution (target) {
//   function find (current, history) {
//     if (current == target) {
//       return history
//     } else if (current > target) {
//       return null
//     } else {
//       return find(current + 5, `(${history} + 5)`) ||
//     find(current * 3, `(${history} * 3)`)
//     }
//   }
//   return find(1, '1')
// }
// console.log(findSolution(14))
// ! (((1 * 3) + 5) * 3)

// var x = [9, 7, 0, 'aj']
// console.log(x)

// const obj = { value: 10 }
// console.log(obj)
// obj.value = 11
// console.log(obj)

// const journal = []
// function addEntry (events, squirrel) {
//   journal.push({ events, squirrel })
// }
// addEntry('no', false)

// console.log(journal)

// const numbers = [5, 1, 7]
// console.log(Math.max(...numbers))

// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
//   author: {
//     firstName: 'Sherlock',
//     lastName: 'Holmes'
//   }
// }

// console.log(Object.entries(note))

// const { id, title, date: naal, author, author: { firstName, lastName } } = note
// console.log(firstName, naal, author)

// const x = [1, 2, 3, 4, 5, 6]
// const [a, ...f] = x
// console.log(a, f)

// Create an object and a copied object with spread
const originalObject = { enabled: true, darkMode: false }
const secondObject = { ...originalObject }
originalObject.enabled = false
console.log(secondObject)
