function transferMoney (from, amount) {
  if (accounts[from] < amount) return
  accounts[from] -= amount // amount is debited even before the beneficiary account is identified.
  accounts[getAccount()] += amount // if beneficiary is not found, error will be thrown, and the amount will not be credited back to sender.
}

function getAccount () {
  const to = prompt('Enter account name')
  if (!(accounts.hasOwnProperty(to))) {
    throw new Error('Account does not exist.')
  }
  return to
}

const accounts = {
  a: 100,
  b: 0,
  c: 30
}

try {
  transferMoney('a', 50)
} catch (error) {
  console.log(`Error: ${error}`)
}
