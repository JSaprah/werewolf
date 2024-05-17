//Variables
let cardsClick = document.getElementsByTagName("input");
let cardsMultiply = document.getElementsByClassName("inner-flip")

//Event listeners
document.addEventListener("DomContentLoaded", function() {

    for (let card of cardsClick) {
        card.addEventListener("click", function() {
           if(this.className = "back-face") {
            alert("this is the back")
           }
           else {
            alert("front-face")
           }  
        })
    }
})


/**Hide the thief card randomly*/
function hideCard(){

}

/**Reveal the card on click*/
function showCard(){
card.classList.toggle("flipCard");
}

/**Check response */
function checkResponse(){

}

/**Add score */
function addScore(){

}
