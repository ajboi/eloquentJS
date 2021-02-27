const isEven = function (x) {
  if (x === 0) {
    return true
  } else if (x === 1) {
    return false
  } else if (x > 1) {
    return isEven(x - 2)
  } else {
    return isEven(-1 * x)
  }
}

console.log(isEven(-4))
