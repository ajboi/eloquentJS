function test () {
  console.log(this)
}

const test1 = { hi: 'yes', test }
test(test1)
// when invoked, "this" refers to the global object in case of Node & Document object in case of browser.

test.call(test1)
// when invoked, "this" refers to the test1 object.

test1.test()
// when invoked, "this" refers to the test1 object.

function normalize () {
  console.log(this.coords.map(n => n / this.length))
  // the "this" in the arrow function refers to the local object rather than the global object since it is an arrow function.
}
normalize.call({ coords: [0, 2, 3], length: 5 })
// ! [0, 0.4, 0.6]
