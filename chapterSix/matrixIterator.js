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

class MatrixIterator {
  constructor (matrix) {
    this.x = 0
    this.y = 0
    this.matrix = matrix
  }

  next () {
    if (this.y === this.matrix.height) return { done: true }

    const value = {
      x: this.x, // stores x index
      y: this.y, // stores y index
      storedValue: this.matrix.get(this.x, this.y) // stores value stored in index
    }
    this.x++

    if (this.x === this.matrix.width) {
      this.x = 0
      this.y = this.y + 1
    }
    return { value, done: false }
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this)
}

const aMatrix = new Matrix(3, 3, (x, y) => y * 3 + x)
console.log(aMatrix)
for (const x of aMatrix) {
  console.log(x)
}

const Iterator = aMatrix[Symbol.iterator]()
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
