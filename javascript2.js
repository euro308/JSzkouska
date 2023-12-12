let comments = [
    {
        name: "Bob",
        date: "2020-12-12T12:30:00Z",
        text: "Nemám rád lidi.",
        pfp: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    },
    {
        name: "Jaroslava",
        date: "2023-12-12T13:20:12Z",
        text: "Hledám pravou lásku.",
        pfp: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    },
    {
        name: "Oliver",
        date: "1997-12-12T14:05:21Z",
        text: "Je mi 16 let.",
        pfp: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    }
];

for (let i = 0; i < comments.length; i++) {
    let body = document.getElementsByTagName("body")[0];

    let createDiv = document.createElement("div");
    createDiv.className = "comment";

    let nameElement = document.createElement("span");
    nameElement.style.fontWeight = "bold";
    nameElement.innerText = comments[i].name;

    let imageElement = document.createElement("img");
    imageElement.className = "img";
    imageElement.src = comments[i].pfp;

    let dateElement = document.createElement("span");
    dateElement.innerText = new Date(comments[i].date).toLocaleString()

    let textElement = document.createElement("span");
    textElement.innerText = comments[i].text;

    let removeButton = document.createElement("button");
    removeButton.style.width = "100px";
    removeButton.innerText = "Smaž mne!";
    removeButton.addEventListener("click", function () {
        funkcePoKliknuti(createDiv);
    });

    createDiv.appendChild(imageElement);
    createDiv.appendChild(nameElement);
    createDiv.appendChild(dateElement);
    createDiv.appendChild(textElement);
    createDiv.appendChild(removeButton);

    body.appendChild(createDiv);
}

function funkcePoKliknuti(div) {
    div.remove();
}