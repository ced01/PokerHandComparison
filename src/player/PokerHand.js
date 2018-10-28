const Result = {
		WIN: 1,
		LOSS: 2,
		TIE: 3
};

class PokerHand {
	
	constructor(id) {
		this.firstCard = new PokerCard(0,1);
		this.secondCard = new PokerCard(0,1);
		this.combinations = new Array();
		this.highestCombination = null;
		this.id = id;
	}

	generate(){
		this.firstCard.generateRamdomCard();
        this.secondCard.generateRamdomCard();
	}

	findHihestCombs(){
		let arrSorted = finalSort(this.combinations).desc(c => c.value), i = 0;
		let finalArr = new Array();
		let finalComb = null;
		finalArr.push(arrSorted[0]);
		for( i = 1; i < arrSorted.length - 1;i++){
			if(arrSorted[0].value == arrSorted[i].value){
				finalArr.push(arrSorted[i]);
			}
		}
		if(finalArr.length != 0 ){
			finalComb = finalArr[0];
		}
		return finalComb;
	}
	compareWith(p2) {
		let res = Result.TIE;
		let msg = "";

		this.highestCombination = this.findHihestCombs();
		if(p2 instanceof PokerHand){
			p2.highestCombination = p2.findHihestCombs();
			if(this.highestCombination != null && p2.highestCombination != null){
				console.log(this.highestCombination.value + " for p1 and " + p2.highestCombination.value +" for p2 ");
				if(p2.highestCombination.value > this.highestCombination.value){
					res = Result.LOSS;
				}
				else if(p2.highestCombination.value < this.highestCombination.value){
					res = Result.WIN;
				}
				else if(p2.highestCombination.value == this.highestCombination.value) {
					// If the highest combination of the two player have the same value we analyse their game
        			//Find High card if nothing else is found or the two player has the same game and potentialy to comapare their hand
					res = findHighCard(playerOneHand,playerTwoHand,analyCombWithSameValue(this,p2));;
				}
			}
			if(this.highestCombination != undefined && p2.highestCombination == undefined){
				res = Result.WIN;
			}else if(this.highestCombination == undefined && p2.highestCombination != undefined){
				res = Result.LOSS;
			}
		}else{
			alert("It is not an instance of a Hand");
		}

		if(res == 3){
			msg = "TIE";
		}
		if(res == 1){
			msg = "PLAYER "+ this.id + " WINS";
		}
		if(res == 2){
			msg = "PLAYER "+ this.id + " LOOSES";
		}
		return msg;
	}

	regenerateCards(hand2){
		let cardsRegeneration = false;

		if( this.hasTwoIdenticalCards(this) || this.hasTwoIdenticalCards(hand2) || this.twoDifferentHandsHaveOneCardIncommun(hand2)){
			cardsRegeneration = true;
		}	
		return cardsRegeneration;
	}

	hasTwoIdenticalCards(hand){
		let AnHandAsTheSameCards = false; /* 7 C  7 C */
		
		if(this.firstCard.isEqual(this.secondCard)){
			AnHandAsTheSameCards = true;
		}
		return AnHandAsTheSameCards;
	}

	twoDifferentHandsHaveOneCardIncommun(hand2){
		
		let hand1AndHandTwoHasOneCardInCommon = false; /* 3 C  6 C */
													  /* 5 C  3 C */
	 	if(this.firstCard.isEqual(hand2.firstCard)){
			hand1AndHandTwoHasOneCardInCommon = true;
		}

		if(this.firstCard.isEqual(hand2.secondCard)){
			hand1AndHandTwoHasOneCardInCommon = true;
		 }
		 
		if(this.secondCard.isEqual(hand2.firstCard)){
			hand1AndHandTwoHasOneCardInCommon = true;
		}
		
		if(this.secondCard.isEqual(hand2.secondCard)){
			hand1AndHandTwoHasOneCardInCommon = true;
	 	} 
		return hand1AndHandTwoHasOneCardInCommon;
	}

	get firstCard() {
		return this._firstCard;
	}
	get secondCard() {
		return this._secondCard;
	}

	set firstCard(val) {
		this._firstCard = val;
	}
	set secondCard(val) {
		this._secondCard = val;
	}
	get combinations() {
		return this._combinations;
	}
	set combinations(comb) {
		this._combinations = comb;
	}
	get highestCombination() {
		return this._highestCombination;
	}
	set highestCombination(hc) {
		this._highestCombination = hc;
	}
	get id() {
		return this._id;
	}
	set id(i) {
		this._id= i;
	}
}



