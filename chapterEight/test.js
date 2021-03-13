function wrapValue (n) {
  const local = n
  function a () {
    return local
  }
  return a
}
const wrap1 = wrapValue(1)
console.log(wrap1)
