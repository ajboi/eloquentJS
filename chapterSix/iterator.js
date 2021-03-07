// When you pass an array or an object in a for/of loop, it works properly with the help of an inbuilt method in the object/array.
// This inbuilt method is named with a symbol called Symbol.iterator.
// The [Symbol.iterator] method returns an iterator object.
// This iterator object consists of properties named next and done.
// The next property (which is a method) provides the next iterable value and done is a boolean that indicates if iteration has completed.

const okIterator = 'OK'[Symbol.iterator]()
// Calls the Symbol.iterator() method for a string 'OK' and stores the resulting iterator object in okIterator variable.

console.log(okIterator.next())
// ! {value: "O", done: false}. Returns "O", first element and false, since iteration isn't complete.

console.log(okIterator.next())
// ! {value: "K", done: false}

console.log(okIterator.next())
// ! {value: undefined, done: true}
