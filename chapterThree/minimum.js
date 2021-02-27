const minimum = function (x, y) {
  if (x < y) {
    return x
  } else if (y < x) {
    return y
  } else {
    return null
  }
}

console.log(minimum(10, 10) || 'equal')
