class A {
  constructor (value) {
    this.value = value
  }

  call () {
    console.log('From A')
  }
}

class B extends A {
  call () {
    console.log('From B')
  }
}

class C extends A {
  call () {
    console.log('From C')
  }
}

function processA (myA) {
  myA.call()
}

const aDa = new A('1')
const bDa = new B('2')
const cDa = new C('3')
processA(aDa)
processA(bDa)
processA(cDa)
console.log(aDa, bDa, cDa, { hi: 'yes', bye: 'no', feelGood: { sometimes: 'yes', otherwise: 'no' } })
