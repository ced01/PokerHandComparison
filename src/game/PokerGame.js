const pokerCard = new PokerCard(0,0);


class PokerGame {

	constructor(firstCard,secondCard,thirdCard,fourthCard,fifthCard) {
        this.deck = new Array();
		this.firstCard = pokerCard;
        this.secondCard = pokerCard;
        this.thirdCard = pokerCard;
        this.fourthCard = pokerCard;
        this.fifthCard = pokerCard;
        this.values = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13);
        this.siuts = new Array(1,2,3,4);
    }
    
    generateDeck(){
        // Let's replay 
        if(this.deck.length != 0 ){
            this.deck = new Array();
        }
        // Filling the deck of cards
        this.siuts.forEach(siu => {
            this.values.forEach(val => {
                this.deck.push(new PokerCard(val,siu)/*,isTaken*/);   
            });
        });
    }

    pickACard(){
       let ranNb = getRandomInt(this.deck.length);
       var chosenCard = this.deck[ranNb];
       this.deck.splice(ranNb,1);
       return chosenCard;
    }

    dealTheGameOnTheTable(){
        this.firstCard = this.pickACard()/*this.pickACard();*/
        this.secondCard = this.pickACard();
        this.thirdCard = this.pickACard();
        this.fourthCard = this.pickACard();
        this.fifthCard = this.pickACard();
    }

	compareWith() {
		return Result.TIE;
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
    get thirdCard() {
		return this._thirdCard;
	}
	get fourthCard() {
		return this._fourthCard;
	}

	set thirdCard(val) {
		this._thirdCard = val;
	}
	set fourthCard(val) {
		this._fourthCard = val;
    }
    get fifthCard() {
		return this._fifthCard;
	}
	set fifthCard(val) {
		this._fifthCard = val;
    }
    
    set siuts(sts){
        this._siuts = sts;
    }
    get siuts(){
        return this._siuts;
    }

    get values(){
        return this._values;
    }
    set values(vs){
        this._values = vs;
    }
    
}
