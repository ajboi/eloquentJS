/* Write a new class PGroup, similar to the Group class from “Groups” on
page 113, which stores a set of values. Like Group, it has add, delete, and has
methods.

Its add method, however, should return a new PGroup instance with the
given member added and leave the old one unchanged. Similarly, delete
creates a new instance without a given member.

The class should work for values of any type, not just strings. It does not
have to be efficient when used with large amounts of values.

The constructor shouldn’t be part of the class’s interface (though you’ll
definitely want to use it internally). Instead, there is an empty instance,
PGroup.empty, that can be used as a starting value.

Why do you need only one PGroup.empty value, rather than having a function
that creates a new, empty map every time? */

class PGroup {
  constructor (x) {
    this.group = x.filter((currentValue, index) => x.indexOf(currentValue) === index)
  }

  add (value) {
    if (this.has(value)) return this
    return new PGroup(this.group.concat(value)) // returns a new PGroup instead of altering current one.
  }

  delete (value) {
    if (!(this.has(value))) return this
    return new PGroup(this.group.filter((a) => a !== value)) // returns a new PGroup instead of altering current one.
  }

  has (value) {
    return this.group.includes(value)
  }
}
PGroup.empty = new PGroup([])

const a = PGroup.empty.add('a') // PGroup.empty will still be empty.
const ab = a.add('b') // a will not have 'b'.
const b = ab.delete('a')// ab will still have 'a'.

console.log(b.has('b'))
// → true
console.log(a.has('b'))
// → false
console.log(b.has('a'))
// → false
