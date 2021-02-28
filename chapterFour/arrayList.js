// const arrayToList = function (array) {
//   const list = {}
//   if (array.length === 1) {
//     list.value = array.shift()
//     console.log(list.value)
//     list.rest = null
//   } else {
//     list.value = array.shift()
//     console.log(list.value)
//     list.rest = arrayToList(array)
//   }
//   return list
// }

const arrayToList = function (array) {
  const list = {}
  list.value = array.shift()
  list.rest = array.length > 0 ? arrayToList(array) : null
  return list
}

const listToArray = function (object) {
  const array = []
  function actual (object, array) {
    if (object.rest == null) {
      array.push(object.value)
      return array
    } else {
      array.push(object.value)
      return actual(object.rest, array)
    }
  }
  return actual(object, array)
}

const prepend = function (element, list) {
  return { value: element, rest: list }
}

const nth = function (list, n) {
  const count = 0
  function valueFinder (list, count) {
    if (count === n) {
      return list.value
    } else {
      count += 1
      return valueFinder(list.rest, count)
    }
  }
  return valueFinder(list, count)
}

console.log(arrayToList([1, 2, 3]))
console.log(listToArray(arrayToList([1, 2, 3])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))
