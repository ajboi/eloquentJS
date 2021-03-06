for (let i = 0; i < 10; i++) {
  console.log(i)
}

/* abstraction 1 - Pass on the upper limit n to a function that repeats an action n times. */
// function repeat (n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i)
//   }
// }

/* abstraction 2 - In addition to the upper limit n, pass on the action to be performed as well. */
function repeat (n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

/* putting the abstraction to use */
repeat(10, console.log)

/* using the repeat function to achieve something that's totally different. For e.g., pushing elements into an array. */
const array = []
repeat(10, (i) => array.push(i))
console.log(array)

/* if we were to write a lower level function for this, it would look like: */
