//Variables
//Get all input properties
const cardsClicks = document.getElementsByTagName("input");
//Get the front, back civilian and werewolf card
const frontCard = document.getElementsByClassName("front-face");
const backCard = document.getElementsByClassName("back-face");
const civilian = document.getElementsByClassName("civilian-front");
const werewolf = document.getElementById("werewolf-front");
//Get the score
const maxTurns = parseInt(document.getElementById("score-canvas").innerText);

//Event listeners
document.addEventListener("DomContentLoaded", function () {
    cardsClicks.addEventListener("click", function () {
        checkResponse();
    })
    runGame();
})

//Run game
function runGame() {

    shuffleCard();
    checkResponse();
    addScore();
}

/**Gets all cards and shuffles it in a random order*/
function shuffleCard() {

    let getCards = frontCard.length;
    let randomValues = new Set();

    while (randomValues.size !== getCards) {
        randomValues.add(Math.floor(Math.random() * getCards));
    }

    console.log(randomValues);
}

shuffleCard();

/**Check response */
function checkResponse() {

    let flipCard = false;
    let backCard = true;

    if (cardsClicks = true) {

    }

}

/**minus turn */
function minusTurn() {

}

