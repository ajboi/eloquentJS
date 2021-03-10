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
    this.place = place,
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
const first = new VillageState(
  'Post Office',
  [{ place: 'Post Office', address: "Alice's House" }, { place: 'Town Hall', address: 'Marketplace' }]
)

const next = first.move("Alice's House")
console.log(next)
