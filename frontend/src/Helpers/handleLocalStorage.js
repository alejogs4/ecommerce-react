
export function add(item, list) {
  if (!localStorage[list]) {
    localStorage.setItem(list, JSON.stringify([item]))
    return true
  }

  const lsList = JSON.parse(localStorage.getItem(list))

  if (userIsIn(item, lsList)) {
    alert("This user already exists!")
    return false
  }

  lsList.push(item)
  localStorage.setItem(list, JSON.stringify(lsList))
  return true
}

export const userIsIn = (item, list) => list.some(element => element.name === item.name)

export function verify(item, list) {
  if (!localStorage[list]) {
    alert("This list doesn't exists!")
    return false
  }
  const lsList = JSON.parse(localStorage.getItem(list))
  return lsList.some(element => element.name === item.name && element.password === item.password)
}
