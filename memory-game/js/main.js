var cards = ["queen", "queen", "kikng", "king"];
var cardsInPlay = [];

function checkForMath() {
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("you found a match!");
	}
	else {
		console.log("Sorry, try again");
	}
}

function flipCard(cardId) {


cardsInPlay.push(cards[cardId]);

console.log("User flipped " + cards[cardId]);
if(cardsInPlay.length === 2){
checkForMath();
}

}

flipCard(0);
flipCard(2);
