let leftDiv = document.querySelector(".left")

let title = document.querySelector(".title")
let priority = document.querySelector(".priority")
let setDate = document.querySelector(".date")

let button = document.querySelector(".save")


button.addEventListener("click", () => {

    if (validateTitle() && validateMonth() && validatePriority()) {

        let newDiv = document.createElement("div")
        newDiv.classList.add("ukol")

        let ukolTitle = document.createElement("h2")
        ukolTitle.innerHTML = title.value

        let ukolPriority = document.createElement("span")
        ukolPriority.innerHTML = `Priorita: ${priority.value}`

        let ukolDate = document.createElement("span")
        ukolDate.innerHTML = `Měsíc: ${setDate.value}`
        document.createElement("br");
        let currentDate = new Date();
        let month = currentDate.getMonth()


        if (month + 1 >= setDate.value) {
            ukolDate.style.backgroundColor = "red"
        }

        let underDiv = document.createElement("div")
        underDiv.classList.add("under")

        newDiv.append(ukolTitle)

        underDiv.append(ukolPriority)
        underDiv.append(ukolDate)
        newDiv.append(underDiv)

        leftDiv.append(newDiv)
    } else {
        alert("Cannot send, some input did not pass the inspection!")
    }
})

function validateTitle() {

    if (title.value.length > 100) {
        alert("Title is too long!")
        return false
    }

    if (title.value.length === 0) {
        alert("Title is blank!")
        return false
    }
    return true
}

function validateMonth() {

    if (setDate.value > 12) {
        alert("Date is invalid!")
        return false
    }

    if (setDate.value.length === 0) {
        alert("Date is blank!")
        return false
    }
    return true
}

function validatePriority() {

    if (priority.value.length === 0) {
        alert("Priority is not chosen!")
        return false
    }
    return true
}

