/**
 * Function to add an item to the localStorage of the browser.
 * This function will save the items as Strings but parsed as JSON.
 * 
 * @param {*} item : The item to add
 * @param {*} list : The list to add the item
 * @param {*} verifyExists : Item already exists in the list?
 * 
 * @return {Boolean} true : If the item could be added succesfully.
 * @return {Boolean} false : If the item could not added succesfully.
 */
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

/**
 * Function to delete an item from the localStorage of the browser.
 * This function will parse the JSON saved in the list, then
 * will remove the item from the list, and finally will save the list
 * modified as a new String.
 * 
 * @param {*} item : The item to delete
 * @param {*} list : The list to delete the item
 * 
 * @return {Boolean} true : If the item could be deleted succesfully.
 * @return {Boolean} false: If the item could not be deleted succesfully.
 */
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

/**
 * Function to verify if an item is in a list, based on its name
 * attribute.
 * 
 * @param {*} item : Item to verify
 * @param {*} list : List to search the item
 * 
 * @return {Boolean} true : If the item exists in the list.
 * @return {Boolean} false: If the item does not exists in the list.
 */
export const itemIsIn = (item, list) => list.some(element => element.name === item.name)

/**
 * This function verifies if an specific type of item (an user),
 * is in a list, based on its name and password attributes.
 * 
 * @param {*} item : Item to verify
 * @param {*} list : List to search the item
 * 
 * @return {Boolean} true : If the item exists in the list.
 * @return {Boolean} false: If the item does not exists in the list.
 */
export function verifyUser(item, list) {
  if (!localStorage[list]) {
    alert("This list doesn't exist!")
    return false
  }

  const lsList = JSON.parse(localStorage.getItem(list))
  return lsList.some(element => element.name === item.name && element.password === item.password)
}
