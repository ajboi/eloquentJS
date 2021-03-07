class Matrix {
  constructor (width, height, element = (x, y) => undefined) {
    this.width = width
    this.height = height
    this.content = []

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y)
      }
    }
  }

  set (x, y, value) {
    this.content[y * this.width + x] = value
  }

  get (x, y) {
    return this.content[y * this.width + x]
  }
}

class SymmetricMatrix extends Matrix {
  constructor (size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x) // since a12 = a21 in identity matrix
      else return element(x, y) //
    }) // calls the constructor of the superclass.
  }

  set (x, y, value) {
    super.set(x, y, value) // calls the set method from the superclass.
    if (x !== y) {
      super.set(y, x, value)
    }
  }
}

const Identity = new SymmetricMatrix(5, (x, y) => {
  if ((x + y) % 2 === 0) return 1
  if ((x + y) % 2 !== 0) return 0
}) // Creating an Identity matrix which is a symmetric matrix.

console.log(Identity)
