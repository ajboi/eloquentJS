/* Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return
the iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified
during iteration. */

class Group {
  constructor (x) {
    this.list = x.filter((currentValue, index) => x.indexOf(currentValue) === index)
  }

  add (value) {
    if (!(this.has(value))) this.list.push(value)
  }

  delete (value) {
    this.list = this.list.filter((a) => a !== value)
  }

  has (value) {
    return this.list.includes(value)
  }

  static from (array) {
    return new Group(array)
  }
}

class GroupIterator {
  constructor (group) {
    this.index = 0
    this.group = group
  }

  next () {
    if (this.index === this.group.list.length) return { done: true }

    const value = this.group.list[this.index]
    this.index++
    return { value, done: false }
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this)
}

for (const value of Group.from(['a', 'b', 'c'])) {
  console.log(value)
}
