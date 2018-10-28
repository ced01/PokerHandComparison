
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class PokerCard {

	constructor(val, siu) {
        this.val = val;
        this.siu = siu;
    }
    generateRamdomCard(){
        this.val = this.values[getRandomInt(values.length)];
        this.siu = this.siuts[getRandomInt(siuts.length)];
        
    }

    transformValueIntoString(val = 0){
        let str = "";
        switch(val){
            case 1:
                str = "A";
                break;
            case 11: 
                str = "J";
                break;
            case 12:
                str = "Q";
                break;
            case 13:
                str = "K";
                break;
            default:
                str = val;
        }
        return str;
    }

    transformSiutIntoString(val = 0){
        let str = "";
        switch(val){
            case 1:
                str = "S";
                break;
            case 2: 
                str = "H";
                break;
            case 3:
                str = "D";
                break;
            case 4:
                str = "C";
                break;
            default:
                str = val;
        }
        return str;
    }

    isEqual(card){
        let cardsEqual = false;
        if(this.val == card.val && this.siu == card.siu){
            cardsEqual = true;
        }
        return cardsEqual;
    }
    hasEqualValue(card){
        let cardsEqual = false;
        if(this.val == card.val){
            cardsEqual = true;
        }
        return cardsEqual;
    }

	compareWith() {
		return Result.TIE;
    }

    get val(){
        return this._val;
    }
    get siu(){
        return this._siu;
    }
    set val(v){
        this._val = v;
    }
    set siu(s){
        this._siu = s;
    }
}
