/* Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the
array. In a way, some is a version of the || operator that acts on arrays, and
every is like the && operator.
Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the
some method. */

const every = function (array, func) {
  for (let i = 0; i < array.length - 1; i++) {
    if (!func(array[i])) {
      return false
    }
  }
  return true
}

console.log(every([1, 2, 3], i => i > 0))

const everySom = function (array, func) {
  const flag2 = !array.some(element => !func(element))
  //   const flag2 = !array.some(element => !func(element))
  return flag2
}
console.log(everySom([1, 2, 3], i => i > 0))

// let x = i => i > 0
// console.log([0, 2, 3].every(x))
