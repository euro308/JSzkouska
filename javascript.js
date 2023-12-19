let div = document.createElement("div")
div.classList.add("div")

let body = document.getElementsByTagName("body")[0];
body.classList.add("body")

let name = document.createElement("span")
name.classList.add("name")
name.innerText = "To-Do List"

div.append(name)

let inputDiv = document.createElement("div")
inputDiv.classList.add("inputDiv")

let inputText = document.createElement("input")
inputText.classList.add("inputText")
inputText.type = "text"
inputText.placeholder = "New Task"

let addButton = document.createElement("button")
addButton.classList.add("buttons")
addButton.innerText = "Add"
addButton.addEventListener("click", function () {
    addElement(inputText);
});

inputDiv.append(inputText)
inputDiv.append(addButton)

function addElement(input) {
    let newItem = document.createElement("div")
    newItem.classList.add("newItem")

    let buttonDiv = document.createElement("div")

    let itemText = document.createElement("span")
    itemText.innerText = input.value
    itemText.style.fontSize = "50px"

    let removeButton = document.createElement("button")
    removeButton.classList.add("buttons")
    removeButton.innerText = "Remove"
    removeButton.addEventListener("click", function () {
        removeElement(newItem);
    });

    buttonDiv.append(removeButton)

    newItem.append(itemText)
    newItem.append(buttonDiv)
    div.append(newItem)
}

function removeElement(input) {
    input.remove();
}

div.append(inputDiv)
body.append(div)


