var roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", 'Marketplace-Farm',
  'Marketplace-Post Office', 'Marketplace-Shop',
  'Marketplace-Town Hall', 'Shop-Town Hall'
]

function buildGraph (edges) {
  const graph = Object.create(null)
  function addEdge (from, to) {
    if (graph[from] == null) {
      graph[from] = [to]
    } else {
      graph[from].push(to)
    }
  }
  for (const [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to)
    addEdge(to, from)
  }
  return graph
}

var roadGraph = buildGraph(roads)

var VillageState = class VillageState {
  constructor (place, parcels) {
    this.place = place
    this.parcels = parcels
  }

  move (destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this
    } else {
      const parcels = this.parcels.map(p => {
        if (p.place != this.place) return p
        return { place: destination, address: p.address }
      }).filter(p => p.place != p.address)
      return new VillageState(destination, parcels)
    }
  }
}

function runRobot (state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`)
      break
    }
    const action = robot(state, memory)
    state = state.move(action.direction)
    memory = action.memory
    console.log(`Moved to ${action.direction}`)
  }
}

function randomPick (array) {
  const choice = Math.floor(Math.random() * array.length)
  return array[choice]
}

function randomRobot (state) {
  return { direction: randomPick(roadGraph[state.place]) }
}

VillageState.random = function (parcelCount = 5) {
  const parcels = []
  for (let i = 0; i < parcelCount; i++) {
    const address = randomPick(Object.keys(roadGraph))
    let place
    do {
      place = randomPick(Object.keys(roadGraph))
    } while (place == address)
    parcels.push({ place, address })
  }
  return new VillageState('Post Office', parcels)
}
