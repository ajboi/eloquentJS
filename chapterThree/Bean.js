
const countChar = function (strng, chr) {
  const x = String(strng)
  let count = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] === chr) {
      count += 1
    }
  }
  return count
}

const countBs = function (strng) {
  return countChar(strng, 'B')
}

console.log(countBs('BBC'))

console.log(countChar('ajai', 'a'))
