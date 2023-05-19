
const nameInputField = document.getElementById("name");
const titelInputField = document.getElementById("titel");
const ageInputField = document.getElementById("age");
const skillsInputField = document.getElementById("skills");
const quoteInputField = document.getElementById("quote");
const imgInputField = document.getElementById("img");

const cardContainer = document.querySelector("article");

const cardButtonsOutput = document.getElementById("cardButtons");

let cardName = document.querySelector("h2");
let cardTitel = document.querySelector("h3");
let cardAge = document.querySelector("h4");
let cardSkill = document.querySelector("h5");
let cardQuote = document.querySelector("h6");

let createdCards = [];

class Card {
    constructor(nameParam,titelParam,alterParam,skillsParam,quoteParam,imgParam){
        this.name = nameParam;
        this.titel = titelParam;
        this.age = alterParam;
        this.skills = skillsParam;
        this.quote = quoteParam;
        this.img = imgParam;
    }

    showMe() {

        console.log(createdCards);

        cardName.innerHTML = this.name;   
        cardTitel.innerHTML = this.titel;
        cardAge.innerHTML = this.age;
        cardSkill.innerHTML = this.skills;
        cardQuote.innerHTML = this.quote;

        if(this.img == "rnd"){
            cardContainer.style.backgroundImage = 'url(https://source.unsplash.com/random/25'+randomNumber()+'x40'+randomNumber()+'/?person)';
        }else {
            cardContainer.style.backgroundImage = "url("+this.img+")";
        }


    }
}


const randomNumber = () =>{
    return Math.round((Math.random() * (9 - 1)) + 1);
}

const AddMe = () => {
    event.preventDefault();
    newName = nameInputField.value;
    newTitel = titelInputField.value;
    newAge = ageInputField.value;
    newSkills = skillsInputField.value;
    newQuote = quoteInputField.value;
    newImgLink = imgInputField.value;

    let newCard = new Card(newName,newTitel,newAge,newSkills,newQuote,newImgLink);
    let newBtn = document.createElement("Button");
    newBtn.innerHTML = newCard.name;
    createdCards.push(newCard);

    let showLast = createdCards[createdCards.length-1];

    newBtn.addEventListener("click", showLast.showMe.bind(showLast));
    cardButtonsOutput.append(newBtn);
}



// let test = new Card("timo","test","31","resdfsd","rsdfsfs", "fsdfsf");
// test.showMe();