//Variables
//Get all input properties
const inputs = document.getElementsByTagName("input");
const cardPlace = document.getElementsByClassName("inner-flip")
//Get the front, back civilian and werewolf card
const frontCard = document.getElementsByClassName("front-face");
const backCard = document.getElementsByClassName("back-face");
const civilian = document.getElementsByClassName("civilian-front");
//const werewolf = document.getElementById("werewolf-front");

//Get the score
const maxTurns = parseInt(document.getElementById("score-canvas").innerText);

//Event listeners
document.addEventListener("DOMContentLoaded", function(){

    for(let input of inputs){
        input.addEventListener("click", function(){

            console.log("click")

        })
    }
}
)

//Run game
function runGame() {

    shuffleCard();
    checkResponse();
    addScore();
}

/**Gets all cards and places the wolf in a random place*/

function shuffleCard() {

    let getCards = frontCard.length;
    let randomValues = new Set();

    while (randomValues.size !== getCards) {
        randomValues.add(Math.floor(Math.random() * getCards));
    }

    let myArray = Array.from(randomValues);
    console.log(myArray)
    let index = myArray.indexOf(1);
    console.log("index of wolf image== ", index);

    return index;
}

shuffleCard();

/**Check response */
function checkResponse() {


}

/**minus turn */
function minusTurn() {

}

