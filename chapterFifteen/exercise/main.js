const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter')

form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)
function addItem (e) {
  e.preventDefault()

  var newItem = document.getElementById('item').value

  var li = document.createElement('li')
  li.className = 'list-group-item'

  var deleteButton = document.createElement('button')
  deleteButton.className = 'btn btn-danger btn-sm float-right delete'
  deleteButton.appendChild(document.createTextNode('X'))

  li.appendChild(deleteButton)

  li.appendChild(document.createTextNode(newItem))
  itemList.appendChild(li)
}

function removeItem (e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}

function filterItems (e) {
  var text = e.target.value.toLowerCase()
  var items = itemList.getElementsByTagName('li')
  var itemArray = Array.from(items)
  itemArray.forEach(x => {
    var itemName = x.firstChild.textContent
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  })
}
