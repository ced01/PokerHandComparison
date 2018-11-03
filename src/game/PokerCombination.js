const nbTotalOfCard = 7;

class PokerCombination {
	constructor(nbOfCard= 1,valueInGame = 1) {
        this.nbOfCard = nbOfCard;
        /*In order to compare to the other combination*/ 
        this.value = valueInGame;
    }

    putCardIntoArray(pokerHand,game){
        let g = game,
            h = pokerHand;
        return new Array(h.firstCard,h.secondCard,g.firstCard,g.secondCard,g.thirdCard,g.fourthCard,g.fifthCard);
    }

    sortArrOfCardAccordingToval(pokerHand,game){
        return finalSort(this.putCardIntoArray(pokerHand,game)).asc(c => c.val);
    }
    sortArrOfCardAccordingTosiut(pokerHand,game){
        return finalSort(this.putCardIntoArray(pokerHand,game)).asc(c => c.siu);
    }

    get valueInGame(){
        return this._valueInGame;
    }
    set valueInGame(vg){
        this._valueInGame = vg;
    }
    get nbOfCard(){
        return this._nbOfCard;
    }
    set nbOfCard(nb){
        this._nbOfCard = nb;
    }
}

class FourOfAKind extends PokerCombination {
    constructor(arr){
        super(4,8);
        this.arr = arr;
    }
    get arr(){
        return this._arr;
    }
    set arr(arr){
        this._arr = arr;
    }

    compare(f){
        let val1 = this.arr[0][0],
            val2 = f.arr[0][0],
            msg = 3;
        
        if(val1 != 1 && val2 != 1){
            if(val1 > val2){
                msg = 1;
            }
            if(val1 < val2){
                msg = 2;
            }
        }
        return msg;
    }
    
}

class HighCard extends PokerCombination {
    constructor(card){
        super(1,1);
    }
    get card(){
        return this._card;
    }
    set card(card){
        this._card1 = card;
    }
}

class Pair extends PokerCombination {
    constructor(arr){
        super(2,2);
        this.arr = arr;
    }

    get arr(){
        return this._arr;
    }
    set arr(arr){
        this._arr = arr;
    }
    
    compare(p){
        let msg = 3;
        
        if(this.arr[0].val > p.arr[0].val){
            console.log("P1 has a better pair than P2");
            msg = 1;
        } 
        if(this.arr[0].val < p.arr[0].val){
            console.log("P2 has a better pair than P1");
            msg = 2;
        }
        if(this.arr[0].val == 1 && p.arr[0].val != 1){
            console.log("P1 has a pair of A");
            msg = 1;
        }
        if(this.arr[0].val != 1 && p.arr[0].val == 1) {
            console.log("P2 has a pair of A");
            msg = 2;
        }
        return msg;
    }
}

class DoublePair extends PokerCombination {
    constructor(arr){
        super(4,3);
        this.arr = arr;
    }
    get arr(){
        return this._arr;
    }
    set arr(arr){
        this._arr = arr;
    }

    compare(d){
        let sortedArr1 = null,
        sortedArr2 = null,
        msg = 3;
        sortedArr1 = finalSort(this.arr).desc(cd => cd.val);
        sortedArr2 = finalSort(d.arr).desc(cd => cd.val);

        console.log(this.arr);
        console.log(sortedArr1);
        console.log(sortedArr2);

        if(sortedArr1[sortedArr1.length - 1].val == 1 && sortedArr2[sortedArr2.length - 1].val != 1){
            msg = 1;
        }
        if(sortedArr1[sortedArr1.length - 1].val != 1 && sortedArr2[sortedArr2.length - 1].val == 1){
            msg = 2;
        }
        if(sortedArr1[sortedArr1.length - 1].val == 1 && sortedArr2[sortedArr2.length - 1].val == 1){
            if(sortedArr1[2].val > sortedArr2[2].val){
                msg = 1;
            }
            if (sortedArr2[2].val > sortedArr1[2].val){
                msg = 2;
            }else {
                msg = 3;
            }
        }
        if(sortedArr1[0].val != 1 && sortedArr2[0].val != 1){
            if(sortedArr1[0].val > sortedArr2[0].val){
                msg = 1;
            } 
            if(sortedArr2[0].val > sortedArr1[0].val){
                msg = 2;
            }
            if(sortedArr2[0].val == sortedArr1[0].val){
                if(sortedArr1[2].val > sortedArr2[2].val){
                    msg = 1;
                }
                if(sortedArr2[2].val > sortedArr1[2].val){
                    msg = 2;
                }else {
                    msg = 3;
                }
            }else {
                msg = 3; 
            }
        }
        return msg;
    }
}

class ThreeOfAkind extends PokerCombination {
    constructor(arr){
        super(3,4);
        this.arr = arr;
    }
    get arr(){
        return this._arr;
    }
    set arr(arr){
        this._arr = arr;
    }

    compare(t){
        let val1 = this.arr[0][0],
            val2 = t.arr[0][0],
            msg = 3;
        
        if(val1 != 1 && val2 != 1){
            if(val1 > val2){
                msg =  1;
            } else if (val1 < val2){
                msg = 2;
            }
        }else{
            if(val1 == 1 && val2 != 1){
                msg =  1;
            }else if(val1 != 1 && val2 == 1){
                msg =  2;
            }
        }
        return msg;
    }
}

class Straight extends PokerCombination {
    constructor(arr){
        super(5,5);
        this.arr = arr;
    }
    get arr(){
        return this._arr;
    }
    set arr(arr){
        this._arr = arr;
    }
}

class Flush extends PokerCombination {
    constructor(arr){
        super(5,6);
        this.arr = arr;
    }
    get arr(){
        return this._arr;
    }
    set arr(arr){
        this._arr = arr;
    }

    compare(flu){
        let sortedArr1asc = finalSort(this.arr).asc(c => c.val), 
        sortedArr2asc = finalSort(flu.arr).asc(c => c.val),
        
        bestCard1 = sortedArr1asc[sortedArr1asc.length - 1].val,
        bestCard2 = sortedArr2asc[sortedArr2asc.length - 1].val,
        firstcard1 = sortedArr1asc[0].val,
        firstcard2 = sortedArr2asc[0].val;

        console.log(firstcard1);
        console.log(firstcard2);

        if(firstcard1 == 1 && firstcard2 != 1){
            console.log("P1 has an higher flush than P2");
            return 1;
        }
        if(firstcard1 != 1 && firstcard2 == 1){
            console.log("P2 has an higher flush than P1");
            return 2;
        }
        if((firstcard1 == 1 && firstcard2 == 1) || (firstcard1 != 1 && firstcard2 != 1)){
            if(bestCard1 > bestCard2){
                console.log("P1 has an higher flush than P2");
                return 1;
            }
            if(bestCard1 < bestCard2){
                console.log("P2 has an higher flush than P1");
                return 2;
            }
            if(bestCard1 == bestCard2){
                console.log("The flushes have the equal value");
                return 3;
            }
        }
    }
}

class Full extends PokerCombination {
    constructor(arr){
        super(5,7);
        this.arr = arr;
       
    }
    get arr(){
        return this._arr;
    }
    set arr(arr){
        this._arr = arr;
    }
    compare(ful){
        let msg = 3,
        threeOkVal1 = 0,
        threeOkVal2 = 0,
        pVal1 = 0,
        pVal2 = 0;

        if(this.arr.length == 2){
            threeOkVal1 = this.arr[0][0].val;
            threeOkVal2 = ful.arr[0][0].val;
            pVal1 = this.arr[1][0].val,
            pVal2 = ful.arr[1][0].val;
        }else{
            threeOkVal1 = this.arr[0].val,
            threeOkVal2 = ful.arr[0].val,
            pVal1 = this.arr[3].val,
            pVal2 = ful.arr[3].val;
        }

        if(threeOkVal1 == 1 && threeOkVal2 != 1){
            console.log("P1 has an higher full than P2");
            msg = 1;
        } else if (threeOkVal2 != 1 && threeOkVal1 == 1){
            console.log("P2 has an higher full than P1");
            msg = 2;
        }else{
            if(threeOkVal1 > threeOkVal2){
                console.log("P1 has an higher full than P2");
                msg = 1;
            }
            if(threeOkVal2 > threeOkVal1){
                console.log("P2 has an higher full than P1");
                msg = 1;
            }
            if(threeOkVal1 == threeOkVal2){
                console.log("P1 and P2 has the same three of a kind in the full");
                if(pVal1> pVal2){
                    console.log("P1 and P2 has the same three of a kind but P1 has a better pair");
                    msg = 1;
                }
                if(pVal2 > pVal2){
                    console.log("P1 and P2 has the same three of a kind but P2 has a better pair");
                    msg = 2;
                }
                if(pVal1 == pVal2) {
                    debugger;
                    console.log("P2 and P2 has exactly the same full !!!");
                    msg = 3;
                }
            }
        }
        return msg;
    }
}



