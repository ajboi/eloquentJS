function buildGraph (edges) {
  const graph = Object.create(null)
  // create an empty object with no prototypes.

  function addEdges (from, to) {
    if (graph[from] == null) {
      graph[from] = [to]
      // if graph.from doesn't exist, create a new array and store the current destination as its first element.
    } else {
      graph[from].push(to)
      // if graph.from already exists, push the current destination to the array list.
    }
  }

  const array = edges.map(value => value.split('-'))
  // create an array of various sources and destinations in the [[source,destination], [source,destination]] format.

  for (const [from, to] of array) {
    addEdges(from, to)
    addEdges(to, from)
    // adding edges in both ways since movement in both ways is possible in a graph.
  }

  return graph
}
const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", 'Marketplace-Farm',
  'Marketplace-Post Office', 'Marketplace-Shop',
  'Marketplace-Town Hall', 'Shop-Town Hall'
]

const roadGraph = buildGraph(roads)
// call buildGraph function that returns an object in the "source_name : [list of destinations]" format.

class VillageState {
  constructor (place, parcels) {
    this.place = place
    this.parcels = parcels
  }

  move (destination) {
    if (!(roadGraph[this.place].includes(destination))) return this
    else {
      const parcels = this.parcels.map(p => {
        if (this.place !== p.place) return p
        else return { place: destination, address: p.address }
      }).filter(p => p.place !== p.address)
      return new VillageState(destination, parcels)
    }
  }
}
// const first = new VillageState(
//   'Post Office',
//   [{ place: 'Post Office', address: "Alice's House" }, { place: 'Town Hall', address: 'Marketplace' }]
// )

// const next = first.move("Alice's House")
// console.log(next)

function runRobot (currentVillageState, robotActionFunction) {
  // A function that accepts a current VillageState and another function that contains the operating instructions for the random robot.
  for (let turn = 0; ; turn++) {
    if (currentVillageState.parcels.length === 0) {
      console.log(`Finished in ${turn} steps.`)
      break
      // Keep looping till there are parcels to be delivered. Break only when parcels become 0.
    }
    const randomRobotAction = robotActionFunction(currentVillageState) // calls the random robot. The random robot function tells where to go next.
    currentVillageState = currentVillageState.move(randomRobotAction.direction) // moves the robot to the direction specified by robotActionFunction.
    // memory = randomRobotAction.memory
    console.log(`Moved to ${randomRobotAction.direction}`)
  }
}

function pickRandom (array) {
  return array[Math.floor(Math.random() * array.length)] // returns a random element within the array
}

function robotAction (VillageState) {
  return { direction: pickRandom(roadGraph[VillageState.place]) } // returns a place that is accessible from the current place of the state.
}

VillageState.random = function (parcelCount = 5) {
  // A static function of VillageState class that creates an instance of VillageState with 5 random parcels to be delivered, with current location as Post Office.
  const parcels = []
  for (let i = 0; i < parcelCount; i++) {
    const address = pickRandom(Object.keys(roadGraph)) // pick a random delivery address.
    let place
    do {
      place = pickRandom(Object.keys(roadGraph)) // pick a random pickup place.
    } while (place === address) // will keep on executing until the address and place are not equal.(mostly not equal the first time.)
    parcels.push({ place, address }) // push the place, address pair to the parcels object.
  }
  return new VillageState('Post Office', parcels)
}

runRobot(VillageState.random(), robotAction)
