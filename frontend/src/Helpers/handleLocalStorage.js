export function add(item, list) {
    let finalItem = item
    let lsList = JSON.parse(localStorage.getItem(list))

    if (lsList != undefined) {
        if (Array.isArray(lsList)) {
            if (!userIsIn(item, lsList)) {
                let localStrg = lsList
                console.log("si lista")
                //finalItem.id = localStrg.length
                localStrg.push(finalItem)
                localStorage.setItem(list, JSON.stringify(localStrg))
            } else {
                alert("This user already exists!")
            }
        } else {
            if (item.name !== lsList.name) {
                let localStrg = JSON.parse("[" + localStorage.getItem(list) + "]")
                console.log("no lista")
                //finalItem.id = 1
                localStrg.push(finalItem)
                localStorage.setItem(list, JSON.stringify(localStrg))
            } else {
                alert("This user already exists!")
            }

        }
    } else {
        //finalItem.id = 0
        localStorage.setItem(list, JSON.stringify(finalItem))
        console.log("no undefined")
    }
}

export function userIsIn(item, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === item.name) {
            return true;
        }
    }
    return false;
}
