# **Poker Hand Comparison**

Poker Hand Comparison is a little program that will compare two hands of poker according to the rules of [Texas Hold'em rules](https://en.wikipedia.org/wiki/Texas_hold_%27em#Hand_values).

## Requirements

The characteristics of the string of cards are:
* A space is used as card seperator
* Each card consists of two characters (not case sensitive)
* The first character is the value of the card, valid characters are: `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `T`(en), `J`(ack), `Q`(ueen), `K`(ing), `A`(ce)
* The second character represents the suit, valid characters are: `S`(pades), `H`(earts), `D`(iamonds), `C`(lubs)

The result of your poker hand compare can be one of these 3 options:
* WIN should return the integer `1`
* LOSS should return the integer `2`
* TIE should return the integer `3`

You are free to use any libraries you want but please do not anything that already evaluates poker hands ;)

Good luck!


Main idea : 
-- Generate the deck and distribute the card among the two players (done)
-- Create an object for each possible poker combination and give a value for each poker combination. (almost)
-- By starting to analyse the most valuable one, if you find it stop to analyse the other combination.
-- Push every single combination in an array associated with the hand you are analysing.
-- Compare the most valuable combination in the hand'array against the other hand

==> If hand1 's combination has a value greater than hand2 then hand1 win.
==> If hand2 's combination has a value greater than hand1 then hand2 win.
==> If they have the same value compare the highest card in hands.
==> if hand1 highest card is greater than hand2, hand1 win 
==> if hand2 highest card is greater than hand1, hand2 win 
==> if the highest card are identical, then tie


/*function findPairs(pokerHand,game) {
    var sortedArrayOfCard = (new Pair(null,null)).sortArrOfCardAccordingToval(pokerHand,game);
    var pairFoundedArr = new Array();
    var c = 0;

    for(c = 0; c < (sortedArrayOfCard.length-1) ; c++){
        if(sortedArrayOfCard[c+1].val == sortedArrayOfCard[c].val){
            pairFoundedArr.push(new Pair(sortedArrayOfCard[c],sortedArrayOfCard[c+1]));
        }
    }
    console.log(pairFoundedArr);
    return pairFoundedArr;
}*/
/*function findDoublePair(pairFoundedArr,threeOfAKarr) {
    var doublePairarr = new Array();
    if(pairFoundedArr.length >= 2 && threeOfAKarr.length == 0){
    var doublePair = null;
    var pairFoundedArrNew = null;
        if (pairFoundedArr.length == 2) {
            doublePair = new DoublePair(pairFoundedArr[0],pairFoundedArr[1]);
            doublePairarr.push(doublePair);
        } else {
            var p1val = pairFoundedArr[0].card1.val;
            var p2val = pairFoundedArr[1].card1.val;
            var p3val = pairFoundedArr[2].card1.val;

            if(p1val > p2val && p2val > p3val){
                doublePair = new DoublePair(pairFoundedArr[0],pairFoundedArr[1]);
            }
            if(p2val > p1val && p1val > p3val){
                doublePair = new DoublePair(pairFoundedArr[1],pairFoundedArr[0]);
            }
            if(p3val > p2val && p2val > p1val){
                doublePair = new DoublePair(pairFoundedArr[2],pairFoundedArr[1]);
            }
            if(p2val > p3val && p3val > p1val){
                doublePair = new DoublePair(pairFoundedArr[1],pairFoundedArr[2]);
            }
            if(p3val > p1val && p1val > p2val){
                doublePair = new DoublePair(pairFoundedArr[2],pairFoundedArr[0]);
            }
            if(p1val > p3val && p3val > p2val){
                doublePair = new DoublePair(pairFoundedArr[0],pairFoundedArr[2]);
            }
            doublePairarr.push(doublePair);
        }
        
    }
    console.log(doublePairarr);
    return doublePairarr;
}*/

/*function findSortedFiveCards(game,gameSortedVal,indexBegin,highCard){
    var i = 0;
    var straight = new Straight(new Array(),highCard);
    if(highCard != null){
        for(i=indexBegin;i<straight.nbOfCard-1;i++){
            if(gameSortedVal[indexBegin].val + i == gameSortedVal[indexBegin + i].val){
                straight.arr.push(game[i]);
            }
        }
        straight.arr.push(highCard);
    } else {
        for(i=indexBegin;i<straight.nbOfCard;i++){
            if(gameSortedVal[indexBegin].val + i == gameSortedVal[indexBegin + i].val){
                straight.arr.push(game[i]);
            }
            
        }
    }
    if(straight.arr.length == straight.nbOfCard){
        return straight;
    }
    else{
        return null;
    }
}

function findStraight(occur) {

    var i = 0, c = 0;
    var straightArr = new Array();
    var straight = new Straight(new Array());
    var gameSorted = occur[2];
 
    console.log(straight.arr);
    occur[3].combinations.push(straight);
    return occur[3].combinations;
}*/
