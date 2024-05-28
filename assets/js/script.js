//Global variables
const inputs = document.getElementsByClassName("inner-flip");
const frontCard = document.getElementsByClassName("front-face");
const backCard = document.getElementsByClassName("back-face");
const civilian = document.getElementsByClassName("civilian-front");
const maxTurns = parseInt(document.getElementById("turnsLeft").innerText);
const turnCounterRef = document.getElementById("turnsLeft");
const modal = document.getElementById("information-modal");
const startMission = document.getElementById("start-mission");
let remainingTurns
let index
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
    console.log("***********RUNNING GAME****************");
    index = generateRandomNumber();

    console.log('MAXTURNS: ', maxTurns)
    remainingTurns = 6;
    turnCounterRef.innerText = remainingTurns;
    console.log('REMAINING TURNS: ', remainingTurns)

    for (let input of inputs) {

            input.addEventListener('click', function() {
            dataIndex = input.getAttribute('data-card');
            let dataIndexArray = new Array(dataIndex);

            compareClickToWolfLocation(dataIndexArray, index);
            }
            )

            console.log('REMAINING TURNS before: ', remainingTurns)

        input.addEventListener("click", handleInput)
    }
}

//handleInput for the remaining turns
function handleInput() {

    console.log('REMAINING TURNS before: ', remainingTurns)

    remainingTurns = minusTurn(remainingTurns);
    turnCounterRef.innerText = remainingTurns;

    console.log('REMAINING TURNS after: ', remainingTurns)
}

/**Decrease the count of the turns left with each user click. */
function minusTurn(remainingTurns) {

    if (remainingTurns > 1) {
        return remainingTurns - 1;
    } else {

        openModal(false);
    }
    return 0;
}

/**Generate a random number and return the index. This is equal to the correct answer*/
function generateRandomNumber() {

    let getCards = frontCard.length;

    let index = Math.floor(Math.random() * getCards);
    console.log("random nr=", index);
    addWolfImage(index);

    return index;
}

/**Add the wolf image in the correct index number*/
function addWolfImage(index) {

    //retrieving the input cards
    for (let card of inputs) {

        cardIndex = card.getAttribute('data-card');
        let cardIndexArray = cardIndex;

        if (cardIndexArray == index) {

            let frontFaceInput = card.querySelector('.front-face input[type="image"]');
            let backFaceInput = card.querySelector('.back-face input[type="image"]');

            backFaceInput.src = "assets/images/werewolf-front.png";

            console.log("Front face input: ", frontFaceInput);
            console.log("Back face input: ", backFaceInput);

        } else {
            let backFaceInput = card.querySelector('.back-face input[type="image"]');
            backFaceInput.src = "assets/images/civilian-front.png";
        }

        console.log("this is card index= ", cardIndexArray);

    }
}

/**Compare the correct answer with the clicked answer */
function compareClickToWolfLocation(dataIndexArray, index) {

    console.log(dataIndexArray);
    let answerCorrect = index;
    console.log(answerCorrect);

    if (dataIndexArray == answerCorrect) {

        console.log("Yayy")
        openModal(true);
    }
}

/**Hide the modal */
function closeModal() {
    modal.classList.add("hidden");
}

/**Make the modal visible */
function openModal(answerCorrect) {

    if (answerCorrect) {

        headerTwo.innerHTML = `You win!`;
        paragraph.innerHTML = `Congratulations!`;
        startButton.innerHTML = `Play again`;

    } else {

        headerTwo.innerHTML = `You Lose!`;
        paragraph.innerHTML = `Try again`;
        startButton.innerHTML = `Play again`;

    }
    modal.classList.remove("hidden");
    // restartGame();
    startButton.addEventListener("click", runGame)

    // Remove eventListeners to prevent more being added on top of each other
    for (let input of inputs) {
        input.removeEventListener("click", handleInput)
    }
}