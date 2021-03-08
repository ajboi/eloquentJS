/* Earlier in the chapter I mentioned that an object’s hasOwnProperty can be
used as a more robust alternative to the in operator when you want to ignore
the prototype’s properties. But what if your map needs to include the word
"hasOwnProperty"? You won’t be able to call that method anymore because the
object’s own property hides the method value.
Can you think of a way to call hasOwnProperty on an object that has its own
property by that name? */

const map = { one: true, two: true, hasOwnProperty: 'hi' }

// Fix this call
// console.log(map.hasOwnProperty('one'))
// → should return true
// However, when there is a property in the map object called "hasOwnProperty", the "hasOwnProperty" method
// in its prototype will be overshadowed leading to errors.
console.log(map.hasOwnProperty)
// returns 'hi'

// Fixed
console.log(Object.prototype.hasOwnProperty.call(map, 'one'))
// → true
