function compareRobots (robot1, memory1, robot2, memory2) {
  let total1 = 0; let total2 = 0

  function countSteps (state, robot, memory) {
    for (let turn = 0; ; turn++) {
      if (state.parcels.length === 0) {
        return turn
      } else {
        const action = robot(state, memory)
        state = state.move(action.direction)
        memory = action.memory
      }
    }
  }
  for (let i = 0; i < 100; i++) {
    const state = VillageState.random()
    total1 += countSteps(state, robot1, memory1)
    total2 += countSteps(state, robot2, memory2)
  }
  console.log(`Robot 1 needed ${total1 / 100} steps per task`)
  console.log(`Robot 2 needed ${total2 / 100}`)
}
