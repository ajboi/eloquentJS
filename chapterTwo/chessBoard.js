let strng = ''
const size = 10 // Enter your value here. prompt() isn't available on Node.
for (let i = 1; i <= size; i++) {
  if (i % 2 === 1) {
    strng = ''
    for (let j = 1; j <= size; j++) {
      j % 2 ? strng += ' ' : strng += '#'
    }
  } else {
    strng = ''
    for (let j = 1; j <= size; j++) {
      j % 2 ? strng += '#' : strng += ' '
    }
  }
  console.log(strng + '\n')
}
