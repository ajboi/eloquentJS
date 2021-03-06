const x = Symbol()
const y = {}
y.a = 1
y[x] = 2
console.log(y)
function getKeyByValue (object, value) {
  return Reflect.ownKeys(object).find(key => object[key] === value)
}
console.log(typeof (getKeyByValue(y, 2)))
// TLDR: A symbol can be accessed with [] only. A key that is a symbol can't be accessed by Object.keys().
// It is only accessible using Reflector.ownKeys() and Object.getOwnPropertySymbols().

const a = Symbol('a') // The string parameter doesn't alter the value of symbol by any means. It is just a description.
const b = Symbol('a')
console.log(a === b)
// returns False. Each symbol is unique.

const fun = Symbol('function key')
const c = {
  a: 'hi',
  [fun] () {
    console.log(this.a)
  }
}
console.log(Object.keys(c)) // Wouldn't mention b since it is a symbol.
console.log(Reflect.ownKeys(c))// the answer would include b too.
c[fun]()
// To use symbols as keys inside objects, you can use [].
