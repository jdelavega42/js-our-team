const team = [
    {
        name: "Wayne Barnett",
        title: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        title: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        title: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        title: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        title: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        title: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    }
]

// collegamento al DOM
const container = document.querySelector(".row")

// ciclo for per generare N carte per N elementi presenti nell'array
for(let i = 0;i < team.length; i++){
    let member = team[i];
    for (let key in member){
    }
    console.log(member.name);

    // dichiaro colonna e relative classi
    const newDiv = document.createElement("div");
    newDiv.classList.add("col", "mb-3");
    // dichiaro carta e relative classi
    const newCard = document.createElement("div")
    newCard.classList.add("card");
    // dichiaro elementi della carta e relative classi
    const newImg = document.createElement("img");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body")
    const cardTitle = document.createElement("p");
    cardTitle.classList.add("card-title", "fs-3");
    const cardText = document.createElement("p");
    cardText.classList.add("card-text", "fw-ligth");
    // genero elementi in sequenza
    container.append(newDiv);
    newDiv.append(newCard);
    newCard.append(newImg, cardBody)
    cardBody.append(cardTitle, cardText);
    // inserisco le chiavi degli oggetti
    newImg.src = `img/${member.picture}`;
    cardTitle.innerHTML = member.name;
    cardText.innerHTML = member.title;

    
}