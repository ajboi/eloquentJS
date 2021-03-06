// Maps is a data structure where a number of key value pairs are stored.
// In JS, maps are implemented with objects.

const ages1 = {
  ajai: 22,
  amuthan: 21,
  sap: 23
}

console.log(`Do we have sap's age? ${'sap' in ages1}`) // returns True.

console.log(`Do we have LP's age? ${'lp' in ages1}`) // returns False.

console.log(`Do we have noString's age? ${'toString' in ages1}`)
// returns True since noString is present in Object.prototype, which is the prototype of ages1.
// to avoid this from happening while implementing maps, you can set the prototype to null.

const ages2 = {
  ajai: 22,
  amuthan: 21,
  sap: 23
}

console.log(`Do we have sap's age? ${'sap' in ages2}`) // returns True.

console.log(`Do we have LP's age? ${'lp' in ages2}`) // returns False.

console.log(`Do we have noString's age? ${'toString' in ages2}`) // returns False.

// However, JS comes with a class called Map that lets you implement the Map datastructure in the most efficient way possible.
// The Map class also has a few inbuilt methods like get, set and has.

const ages3 = new Map()
ages3.set('Boris', 39)
ages3.set('Liang', 22)
ages3.set('Júlia', 62)
console.log(`Júlia is ${ages3.get('Júlia')}`)
// ! Júlia is 62
console.log("Is Jack's age known?", ages3.has('Jack'))
// ! Is Jack's age known? false
console.log(ages3.has('toString'))
// ! false
