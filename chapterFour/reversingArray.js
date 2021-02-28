const reverseArray = function (array) {
  const reversedArray = []
  for (let i = 0; i < array.length; i++) {
    reversedArray[array.length - 1 - i] = array[i]
  }
  return reversedArray
}

const reverseArrayinPlace = function (array) {
  for (let i = 0; i < Math.floor(array.length) / 2; i++) {
    const temp = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
  }
  //   Method 2
  //   const tempArray = [...array]
  //   for (let i = 0; i < array.length; i++) {
  //     array[i] = tempArray[array.length - 1 - i]
  //   }
  return array
}

console.log(reverseArray([2, 3, 4, 5]))
console.log(reverseArrayinPlace([2, 3, 4, 5]))
