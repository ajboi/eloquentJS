class Temperature {
  constructor (tempCelc, date) {
    this.tempCelc = tempCelc,
    this.date = date
  }

  get fahrenheit () {
    return this.tempCelc * 1.8 + 32
  }

  set fahrenheit (value) {
    this.tempCelc = (value - 32) / 1.8
  }

  static compare (tempCelc1, tempCelc2) {
    return tempCelc1.tempCelc - tempCelc2.tempCelc
  }
  // This is a static method. A static method does not operate on the properties inside an instance.
  // In short, no this keyword can be used inside the static method.
}

const Temp1 = new Temperature(33, new Date(2001, 1, 1))
console.log(Temp1.fahrenheit) // Notice how fahrenheit despite being a function is accessed like a value.
console.log(Temp1)

Temp1.fahrenheit = 89 // Notice how fahrenheit function is called! (in an assignment style?).
console.log(Temp1.tempCelc) // Celc value is changed as per the fahrenheit value given in set method.

const days = [
  new Temperature(28, new Date(2021, 3, 22)),
  new Temperature(35, new Date(2021, 3, 8))
]

const sorted = days.sort(Temperature.compare)
// The static method is accessed with "ClassName.functionName" convention instead of "ObjectName.functionName" convention.
console.log(sorted)
