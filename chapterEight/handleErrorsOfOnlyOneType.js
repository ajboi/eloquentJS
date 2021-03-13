// Consider the following code

function promptDirection (question) {
  const dir = prompt(question)
  if (dir.toLowerCase() === 'left') return "L"
  if (dir.toLowerCase() === 'right') return "R"
  throw new Error('Unknown input.')
}

for (;;) {
  try {
    let dir = promtDirection('Where?') // look at the spelling mistake.
    console.log('you chose ', dir)
    break
  } catch (e) {
    console.log('invalid input. Try again.')
    // though this error is catched, it will keep on executing the try block where there is a spellig mistake
    // in the function call. It would be nice if we could identify only the errors where user input values other
    // than left and right.
  }
}

class InputError extends Error {}
// An empty class that inherits Error class completely and does not add anything on top of it.

function promptDirection (question) {
    const dir = prompt(question)
    if (dir.toLowerCase() === 'left') return "L"
    if (dir.toLowerCase() === 'right') return "R"
    throw new InputError('Unknown input.') // Throws error of the type InputError, to identify these errors from other common errors.
  }

  for (;;) {
    try {
      let dir = promtDirection('Where?') // look at the spelling mistake.
      console.log('you chose ', dir)
      break
    } catch (e) {
        if (e instanceof InputError) console.log('invalid input. Try again.')
      // Now, the catch block will catch only errors of type InputError, which are thrown when the input entered isn't of expected value.
      // All, the other errors such as the spelling mistake will be handled appropriately by the interpreter.
      else throw e
    }
  }