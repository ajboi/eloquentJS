/* Say you have a function primitiveMultiply that in 20 percent of cases multiplies
two numbers and in the other 80 percent of cases raises an exception
of type MultiplicatorUnitFailure. Write a function that wraps this clunky
function and just keeps trying until a call succeeds, after which it returns the
result.
Make sure you handle only the exceptions you are trying to handle. */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply (a, b) {
  if (Math.random() > 0.99999) {
    return a * b
  } else {
    console.log('cant do')
    throw new MultiplicatorUnitFailure('Huehue.')
    // creates a Multiplication failure error, and control is transferred to initial call of primitiveMultiply.
  }
}

function reliableMultiply (a, b) {
  for (; ;) {
    try {
      console.log(primitiveMultiply(a, b))
      break
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) { throw e }
      // If the statement here had been "console.log(e)" and the negation had been removed, it would have kept on throwing error until the random number becomes > 0.2 and the result is printed.
      // This section throws an error only when the error is not of the type Multiplication error.
      // If the error is of the multiplication type, again the function is called with the help of for loop.
    }
  }
}

reliableMultiply(7, 5)
