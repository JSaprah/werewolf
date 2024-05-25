//Global variables
const inputs = document.getElementsByClassName("inner-flip");
const frontCard = document.getElementsByClassName("front-face");
const backCard = document.getElementsByClassName("back-face");
const civilian = document.getElementsByClassName("civilian-front");
const maxTurns = parseInt(document.getElementById("turnsLeft").innerText);
const turnCounterRef = document.getElementById("turnsLeft");
const modal = document.getElementById("information-modal");
const startMission = document.getElementById("start-mission");
//Change modal text
const headerTwo = document.getElementById("headerTwo");
const paragraph = document.getElementById("paragraph");
const startButton = document.getElementById("start-mission");


//Event listeners
document.addEventListener("DOMContentLoaded", function () {

    modal.classList.remove("hidden");

    startMission.addEventListener("click", closeModal);

    runGame();
}
)

//Run game
function runGame() {

    let index = shuffleCard();
    let remainingTurns = maxTurns;

    for (let input of inputs) {
        //  console.log('input', input)

        input.addEventListener("click", function () {

            remainingTurns = minusTurn(remainingTurns);
            turnCounterRef.innerText = remainingTurns;

            dataIndex = input.getAttribute('data-');
            let dataIndexArray = new Array(dataIndex);

            compareClickToWolfLocation(dataIndexArray, index);
        })
    }
}

/**Decrease the count of the turns left. */
function minusTurn(turnsCount) {

    if (turnsCount > 1) {
        return turnsCount - 1;
    } else {

        //    console.log("Game over");

        openModal(false);

        return 0;
    }

}

/**Gets all cards and place the wolf in a random index*/
function shuffleCard() {

    //generating the random number
    let getCards = frontCard.length;

    let index = Math.floor(Math.random() * getCards);
    console.log("random nr=", index);

    //retrieving the input cards
    for (let card of inputs) {

        cardIndex = card.getAttribute('data-');
        let cardIndexArray = cardIndex;

        if (cardIndexArray == index) {

            const frontFaceInput = card.querySelector('.front-face input[type="image"]');
            const backFaceInput = card.querySelector('.back-face input[type="image"]');

            console.log("Front face input: ", frontFaceInput);
            console.log("Back face input: ", backFaceInput);

        }

        console.log("this is card index= ", cardIndexArray);

    }
    return index;
}

/**Compares the correct answer with the clicked answer */
function compareClickToWolfLocation(dataIndexArray, index) {

    console.log(dataIndexArray);
    let answerCorrect = index;
    console.log(answerCorrect);

    if (dataIndexArray == answerCorrect) {

        console.log("Yayy")
        openModal(answerCorrect);

    } else

        console.log("nahh")

}

function closeModal() {
    modal.classList.add("hidden");
}

function openModal(answerCorrect) {

    if (answerCorrect) {

        headerTwo.innerHTML = `You win!`;
        paragraph.innerHTML = `Congratulations!`;
        startButton.innerHTML = `Play again`;

        restartGame();

    } else {

        headerTwo.innerHTML = `You Lose!`;
        paragraph.innerHTML = `Try again`;
        startButton.innerHTML = `Play again`;

        restartGame();

    }
    modal.classList.remove("hidden");
}

function restartGame() {



    console.log("restarting it")

}