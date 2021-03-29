const x = new Promise((resolve, reject) => {
  const y = true
  if (y) resolve('Resolved x.')
  else reject('resolve x failed.')
})

const xyz = function () {
  return new Promise((resolve, reject) => {
    const z = false
    if (z) resolve('Resolved xyz.')
    else reject('resolve xyz failed.')
  })
}

function fun () {
  x.then(xyz)
    .then(success => console.log(`Success: ${success}`))
    .catch(error => console.log(`Error: ${error}`))
}

fun()
