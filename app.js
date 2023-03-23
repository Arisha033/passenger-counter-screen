//calling button id
let saveEl = document.getElementById("save-el")

//calling h2 id
let countEl = document.getElementById("count-el")
let count = 0

//printing saved count in console
// console.log(saveEl)

//function for incrementing count
 //render the variable using innertext
function increment() {
    count += 1
    countEl.innerHTML = count   
}

//function for saving the count
//variable for adding previous elements to the count
//render the variable using innertext
//textContent will return every element as it is in the node
//to refresh the count everytime we set countEl as zero
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

    
}

