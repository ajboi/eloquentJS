function Rabbit (type) {
  this.type = type
}
// Constructor created.

// When using constructors, we can't define a prototype object explicitly.
// Assume the constructor function's name to be the name of the Prototype itself.
// We usually name Constructor functions with an Uppercase letter at the start.
// So, we define the prototype's properties and methods in the following way:

Rabbit.prototype.speak = function (strng) {
  console.log(`${this.type} says, "${strng}"`)
}
// We define prototype methods using the .prototype property.

const whiteRabbit = new Rabbit('white')
whiteRabbit.speak('Hasta la vista, baby!')

console.log(Object.getPrototypeOf(whiteRabbit) === Rabbit.prototype)
// Returns True. Prototype of whiteRabbit object is in the prototype function of Rabbit constructor.
// This is different from the example in prototypePractice.js where protoStudent is a standalone object.

console.log(Object.getPrototypeOf(Rabbit) === Function.prototype)
// Returns True for obvious reasons.

// TLDR: Before ES6, Javascript classes = Constructor function + a Prototype property.
