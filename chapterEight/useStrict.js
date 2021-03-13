// You can mention use script for the entire script or for certain functions.

function strictLoge () {
  'use strict'
  for (i = 0; i < 5; i++) { // throws error.
    console.log(i)
  }
}

function loge () {
  for (i = 0; i < 5; i++) {
    console.log(i) // logs 0,1,2,3,4.
  }
}

function constructorWrapper1 () {
  function ConstructorProton (name) {
    this.name = name
  }
  const x = ConstructorProton('x') // called without new keyword.
  console.log(name) // prints 'x' . This is because JS creates a new global object with the name of 'name'.
  // While using class convention, use strict is implemented by default.
}

function constructorWrapper2 () {
  'use strict'
  function ConstructorProton (name) {
    this.name = name
  }
  const x = ConstructorProton('x')
  console.log(x)
  console.log(typeof x)
  // throws error.
}

strictLoge()
loge()
constructorWrapper1()
constructorWrapper2()
