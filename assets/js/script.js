//Variables
//Get all input properties
const inputs = document.getElementsByTagName("input");
const cardPlace = document.getElementsByClassName("inner-flip")
//Get the front, back civilian and werewolf card
const frontCard = document.getElementsByClassName("front-face");
const backCard = document.getElementsByClassName("back-face");
const civilian = document.getElementsByClassName("civilian-front");
//Get the score
const maxTurns = parseInt(document.getElementById("score-canvas").innerText);

//Event listeners
document.addEventListener("DOMContentLoaded", function () {

    for (let input of inputs) {
        input.addEventListener("click", function () {
            console.log(input);
            console.log("click");
            return (input);
        })
    }
    runGame();
}
)

//Run game
function runGame() {

    checkResponse();
    minusTurn();
}

/**Gets all cards and place the wolf in a random place*/
function shuffleCard() {

    let getCards = frontCard.length;
    let randomValues = new Set();

    while (randomValues.size !== getCards) {
        randomValues.add(Math.floor(Math.random() * getCards));
    }

    let myArray = Array.from(randomValues);
    console.log(myArray);
    let index = myArray.indexOf(1);
    console.log("index of wolf image== ", index);

    return index;
}

/**Check response */
function checkResponse(input) {
    let correctAnswer = shuffleCard();
    console.log(`Correct Answer is ${correctAnswer}`);

}

/**minus turn */
function minusTurn(input) {

    let remainingTurns = maxTurns;
    console.log(`Remaining turns = ${maxTurns}`);
}

