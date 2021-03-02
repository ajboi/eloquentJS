/* Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays. */

const x = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const y = x.reduce((concatenated, notConcatenated) => concatenated.concat(notConcatenated))
console.log(y)
