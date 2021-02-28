const range = function (start, end, step = 1) {
  const array = []

  if (step > 0) {
    for (start; start <= end; start += step) {
      array.push(start)
    }
  } else {
    for (start; start >= end; start += step) {
      array.push(start)
    }
  }
  return array
}

const sum = function (array) {
  return array.reduce((total, sum) => total + sum)
}

console.log(range(1, 20))
console.log(range(5, 2, -1))
console.log(sum(range(1, 30, 4)))
