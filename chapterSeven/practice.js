function buildGraph (array) {
  const graph = {}
  const stripped = array.map(a => a.split('-'))
  //   console.log(stripped)

  function yes (from, to) {
    if (!(from in graph)) {
      graph[from] = [to]
    } else {
      graph[from].push(to)
    }
  }

  for (const [from, to] of stripped) {
    yes(from, to)
    yes(to, from)
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
// console.log(roadGraph)

class VillageState {
  constructor (place, parcels) {
    this.place = place,
    this.parcels = parcels
  }

  move (destination) {
    if (!(roadGraph[this.place].includes(destination))) return this
    else {
      const parcels = this.parcels.map(a => {
        if (this.place !== a.place) return a
        else return { place: destination, address: a.address }
      }).filter(p => p.place !== p.address)
      return new VillageState(destination, parcels)
    }
  }
}

const initial = new VillageState('Post Office', [{ place: 'Post Office', address: "Alice's House" }, { place: "Alice's House", address: 'Marketplace' }])

const next = initial.move("Alice's House")
console.log(next.place)
console.log(next.parcels)
console.log(initial.place)
