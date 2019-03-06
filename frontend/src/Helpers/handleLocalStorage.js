
export function addItem(item, list, verifyExists = true) {
  if (!localStorage[list]) {
    localStorage.setItem(list, JSON.stringify([item]))
    return true
  }

  const lsList = JSON.parse(localStorage.getItem(list))
  
  if (itemIsIn(item, lsList) && verifyExists) {
    alert("This item already exists!")
    return false
  }

  lsList.push(item)
  localStorage.setItem(list, JSON.stringify(lsList))
  return true
}

export function deleteItem(item, list){
  if (localStorage[list]){
    const lsList = JSON.parse(localStorage.getItem(list))
    const index = lsList.findIndex(element => element.name === item.name)
    lsList.splice(index, 1)
    localStorage.setItem(list, JSON.stringify(lsList))
    return true
  }
  
  alert("This list doesn't exist")
  return false
}

export const itemIsIn = (item, list) => list.some(element => element.name === item.name)

export function verifyUser(item, list) {
  if (!localStorage[list]) {
    alert("This list doesn't exist!")
    return false
  }

  const lsList = JSON.parse(localStorage.getItem(list))
  return lsList.some(element => element.name === item.name && element.password === item.password)
}
