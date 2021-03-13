// good bank code with a finally block
const accounts = {
  a: 100,
  b: 0,
  c: 30
}

function transfer (from, amount) {
  if (accounts[from] < amount) return
  let progress = 0
  try {
    accounts[from] -= amount
    progress = 1
    accounts[getAccount()] += amount
    progress = 2
  } finally {
    if (progress === 1) {
      accounts[from] += amount
    }
  }
}

function getAccount () {
  const to = prompt('Enter account name')
  if (!(accounts.hasOwnProperty(to))) {
    throw new Error('Account does not exist.')
  }
  return to
}

transfer('a', 50)
