export function add(item, list) {
  let finalItem = item
  let lsList = JSON.parse(localStorage.getItem(list))
  //TODO: en javascript undefined es equivalente a false por lo que poniendo if (lsList) ya era suficiente, si era undefined
  // No entraba y si no era undefined entraria
  if (lsList != undefined) {
    if (Array.isArray(lsList)) {
      if (!userIsIn(item, lsList)) {
        let localStrg = lsList
        console.log("si lista")
        localStrg.push(finalItem)
        localStorage.setItem(list, JSON.stringify(localStrg))
        
      } else {
        alert("This user already exists!")
        return false
      }
    } else {
      if (item.name !== lsList.name) {
        let localStrg = JSON.parse("[" + localStorage.getItem(list) + "]")
        console.log("no lista")
        localStrg.push(finalItem)
        localStorage.setItem(list, JSON.stringify(localStrg))
      } else {
        alert("This user already exists!")
        return false
      }

    }
  } else {
    localStorage.setItem(list, JSON.stringify(finalItem))
    console.log("no undefined")
  }
  return true
}
// TODO: Esto se pudo haber hecho usando Array.some ej list.some(listItem => listItem.name === item.name )
// Te puedo explicar como funciona
export function userIsIn(item, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === item.name) {
      return true
    }
  }
  return false
}
