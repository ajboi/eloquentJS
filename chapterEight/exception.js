function whoAmI () {
  const me = 'devil'
  if (me.toLowerCase() === 'devil') return 'Hello Devil! Are you here to do the Devil\'s business?'
  if (me.toLowerCase() === 'angel') return 'Hello loser'
  else throw new Error(`found tresspasser ${me}`) // throws an error.
}

function dummyFunc () {
  return whoAmI() // this does not constitute a closure.
  // A closure would have been created if the statement had been "return whoAmI"
}

try {
  console.log(dummyFunc())
} catch (error) { // the error is catched here.
  console.log(`Danger: ${error}`)
}

// Note that the dummyFunc() does not have any error handling mechanisms in place
// and completely ignores the possibility that whoAmI might go wrong.
// This is the big advantage of exceptions: error-handling code is necessary only
// at the point where the error occurs and at the point where it is handled. The
// functions in between can forget all about it. Well, almost...
