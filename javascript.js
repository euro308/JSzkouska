document.body.onload = tableCreate;

const words = ["Bob", "Petr", "Adam", "Roman", "Jaroslav", "Lukáš", "Kuba", "Brno je trash"]


function tableCreate() {
    let body = document.getElementsByTagName("body")[0];

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    for (let i = 0; i <= 10; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 10; j++) {
            let tableData = document.createElement("td");
            let dataText = document.createTextNode(words[j]);

            tableData.appendChild(dataText);
            row.appendChild(tableData);
    }

    //row added to end of table body
    tableBody.appendChild(row);
}

// append the <tbody> inside the <table>
table.appendChild(tableBody);
// put <table> in the <body>
body.appendChild(table);
// tbl border attribute to
table.setAttribute("border", "1");
}