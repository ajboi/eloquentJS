class Rabbit {
  constructor (type) {
    this.type = type
  }

  speak (strng) {
    console.log(`${this.type}Rabbit says,"${strng}"`)
  }
}
// This is the ES6 version of declaring classes.
// Note that you can define both constructor and methods inside a single set of braces.
// However, you still can't define non-functional properties inside these classes.

const WhiteRabbit = new Rabbit('white')
WhiteRabbit.speak('Wubba Lubba Dub Dub.')

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype)
// Returns True.
console.log(Object.getPrototypeOf(WhiteRabbit) == Rabbit.prototype)
// Returns True.
