//Global variables
const inputs = document.getElementsByClassName("inner-flip");
const frontCard = document.getElementsByClassName("front-face");
const backCard = document.getElementsByClassName("back-face");
const civilian = document.getElementsByClassName("civilian-front");
const maxTurns = parseInt(document.getElementById("turnsLeft").innerText);
const turnCounterRef = document.getElementById("turnsLeft");
const modal = document.getElementById("information-modal");
const startMission = document.getElementById("start-mission");
const descriptionIntro = document.getElementsByClassName("description-intro");


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
        console.log('input', input)

        input.addEventListener("click", function () {

            remainingTurns = minusTurn(remainingTurns);
            turnCounterRef.innerText = remainingTurns;

            dataIndex = input.getAttribute('data-');
            let dataIndexArray = new Array(dataIndex);

            //correctResponse(index);
            compareClickToWolfLocation(dataIndexArray, index);

        })
    }
}

/**Decrease the count of the turns left. */
function minusTurn(turnsCount) {

    if (turnsCount > 1) {
        return turnsCount - 1;
    } else {

        console.log("Game over");
        
        openModal("false");

        return 0;
    }

}

/**Gets all cards and place the wolf in a random index*/
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

    // correctResponse(index);
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

function closeModal(){
    modal.classList.add("hidden");
}

function openModal(answerCorrect){


    if(answerCorrect){

        descriptionIntro.innerHTML = `
        <div>
            <h2>You win</h2>
            <p>Congrats</p>
            <button onClick="restartGame()">Play again</button>
        </div>`

    }else {

        descriptionIntro.innerHTML = `
        <div>
            <h2>You lose</h2>
            <p>Try again</p>
            <button onClick="restartGame()">Play again</button> 
        </div>`

    }
    
    modal.classList.remove("hidden");
}

function restartGame(){

    console.log("restarting it")
}

