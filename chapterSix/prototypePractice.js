const ProtoStudent = {
  total: function () {
    return this.marksList.reduce((total, next) => {
      total += next
      return total
    })
  }
}
// Created a prototype object ProtoStudent

const ajai = Object.create(ProtoStudent) // Created a student object ajai who would have his own properties apart from the total method in ProtoStudent.
ajai.name = 'ajai'
ajai.marksList = [99, 100, 100, 100, 35]
console.log(ajai.total())
console.log(Object.getPrototypeOf(ajai) == ProtoStudent)
