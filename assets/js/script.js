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
document.addEventListener("DomContentLoaded", function() {
    cardsClicks.addEventListener("click", function(){
        checkResponse();
    })
    runGame();
})

//Run game
function runGame(){

    shuffleCard();
    checkResponse();
    addScore();
}

/**Gets all cards and shuffles it in a random order*/
function shuffleCard(){

    let getCards = frontCard.length;

   for (i = 0; i < getCards; i++){

    let random = Math.floor(Math.random() * (getCards));
    let temporary = getCards[i];
    getCards[i] = getCards[random]; 
    getCards[random] = temporary; 

   }
}

/**Check response */
function checkResponse(){

    let flipCard = false;
    let backCard = true;

    if(cardsClicks = true){

        let flipCard = true;
        let backCard = false;
    }

}

/**Add score */
function addScore(){

    let maxTurns = score;
}