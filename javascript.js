let information = []

let infoReach = 12

function CreateSite() {

    information = []
    document.querySelector(".line").innerText = "";
    document.querySelector(".uptime").innerText = "";
    document.querySelector(".downtime").innerText = "";
    document.querySelector(".avgUptime").innerText = "";

    function addInfo(day, status) {

        let object =
            {
                day: day,
                status: status
            }
        information.push(object)
    }

    for (let i = 0; i < infoReach; i++) {
        let random = Math.floor(Math.random() * 100) + 60;

        let status = ""

        if (random >= 90) {
            status = "OK"
        }
        if (random > 75 && random < 90) {
            status = "WARNING"
        }
        if (random <= 75) {
            status = "ERROR"
        }

        addInfo(i, status)
    }

    let lineDiv = document.querySelector(".line")

    let green = 0
    let yellow = 0
    let red = 0
    let lastDowntime = ""

    information.forEach((object) => {


        let newDiv = document.createElement("div")

        if (object.status === "OK") {
            newDiv.className = "green"
            green++
        }
        if (object.status === "WARNING") {
            newDiv.className = "yellow"
            yellow++
        }
        if (object.status === "ERROR") {
            newDiv.className = "red"
            red++
            lastDowntime = object.day
        }

        lineDiv.append(newDiv)
    })

    let uptime = document.querySelector(".uptime")
    uptime.append(`Uptime: ${information[(information.length - 1)].status}`)

    let downtime = document.querySelector(".downtime")
    downtime.append(`Last Downtime: ${(infoReach - lastDowntime)} days ago`)

    let avgUptime = document.querySelector(".avgUptime")
    avgUptime.append(`Average Uptime: ${((green + yellow) / information.length) * 100} %`)
}

CreateSite();

let refreshButton = document.querySelector(".refresh")
refreshButton.addEventListener("click", () => {
    CreateSite()
})

let alertButton = document.querySelector(".alertButton")

alertButton.addEventListener("click", () => {
    let alertDiv = document.createElement("div")
    alertDiv.className = "alert"
    alertDiv.innerText = "ℹ Alert: This is a default visible toast!"

    document.body.appendChild(alertDiv)

    setTimeout(() => {
        alertDiv.style.display = "none"
    }, 2000)

})



