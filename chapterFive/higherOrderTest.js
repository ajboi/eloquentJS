function noisy (f) {
  return (...args) => {
    console.log('calling with', args)
    const result = f(...args)
    console.log('called with', args, ', returned', result)
    return result
  }
}
noisy(Math.min)(3, 2, 1)
// ! calling with [3, 2, 1]
// ! called with [3, 2, 1] , returned 1

// Alternate implementation of above function
// function noisy (f) {
//   function closure (...args) {
//     const result = f(...args)
//     return result
//   }
//   return closure
// }
// const yes = noisy(Math.min)
// console.log(yes(1, 2, 3))
