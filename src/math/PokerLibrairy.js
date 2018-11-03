function isIncreasingSequence(numbers,i) {
    
    for (var num = i; num < numbers.length - 1; num++) {
        if (numbers[num] >= numbers[num + 1]) {
            return false;
        }
    }
    return true;
  }
function findThreeOfKind(pairFoundedArr) {
    var threeOfAKarr = new Array();
    var threeOfAK = null;
    for(p = 0; p < (pairFoundedArr.length-1) ; p++){
        if(pairFoundedArr[p+1].card1.val == pairFoundedArr[p].card2.val){
            threeOfAK = new ThreeOfAkind(pairFoundedArr[p+1].card1,pairFoundedArr[p+1].card2,pairFoundedArr[p].card1);
            if(threeOfAK != null){
                threeOfAKarr.push(threeOfAK);
            }
        }
    }
    console.log(threeOfAKarr);
    return threeOfAKarr;
}

function occur(pokerHand,game,sortByvalue) {
    let a = [], b = [], prev, i = 0,
        arr = null,
        arr2 = new Array(),
        p = new Pair(null);
    
    if(sortByvalue){
        arr = p.sortArrOfCardAccordingToval(pokerHand,game);
        arr.forEach(c=> {
            arr2.push(c.val);
            
        });
    } else {
        arr = p.sortArrOfCardAccordingTosiut(pokerHand,game);
        arr.forEach(c=> {
            arr2.push(c.siu);
        });
    }
   
    for (i = 0; i < arr2.length; i++ ) {
        if ( arr2[i] !== prev ) {
            a.push(arr2[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr2[i];
    }

    return [a, b, arr, pokerHand];
}

function findFTPFu(occur) {

    let i = 0, l = 0,
        threeOfAkind = new ThreeOfAkind(new Array()),
        fourOfAkind = new FourOfAKind(new Array()), 
        pair = new Pair(new Array()),
        full = new Full(new Array()),
        doublePair = new DoublePair(new Array()),
        occurences = occur[1],
        values = occur[0],
        gsorted = occur[2];

    
    occurences.forEach(o => {
        if(o == 4){
            gsorted.forEach( c => {
                if(values[i] == c.val ){
                    fourOfAkind.arr.push(c); 
                    pair.arr.push(c);
                }
            });
        }
        if(o == 3){
            gsorted.forEach( c => {
                if(values[i] == c.val ){
                    threeOfAkind.arr.push(c); 
                }
            });
        }
        if(o == 2){
            gsorted.forEach( c => {
                if(values[i] == c.val ){
                    pair.arr.push(c); 
                }
            });
        }
        i++;
    });

    l = threeOfAkind.arr.length;

    if(pair.arr.length > 2){
        doublePair.arr = pair.arr;
        pair.arr = new Array();
    }
    if(l >= 1){
        if(pair.arr.length >= 1){
            full.arr.push(threeOfAkind.arr,pair.arr);  
        }
        if(pair.arr.length == 0 && l == 2){
            if(threeOfAkind.arr[0].val != threeOfAkind.arr[l - 1].val){
                if(threeOfAkind.arr[0].val != 1){
                    full.arr.push(threeOfAkind.arr[l - 1],threeOfAkind.arr[l - 2],threeOfAkind.arr[l - 3],threeOfAkind.arr[0],threeOfAkind.arr[1]);
                }else{
                    full.arr.push(threeOfAkind.arr[0],threeOfAkind.arr[1],threeOfAkind.arr[2],threeOfAkind.arr[l - 1],threeOfAkind.arr[l - 2]);
                }
            }
        }  
    }
    if(full.arr.length != 0){
        occur[3].combinations.push(full);
    }
    if(fourOfAkind.arr.length != 0){
        occur[3].combinations.push(fourOfAkind);
    }
    if(threeOfAkind.arr.length != 0){
        occur[3].combinations.push(threeOfAkind);
    }
    if(doublePair.arr.length != 0){
        occur[3].combinations.push(doublePair);
    }
    if(pair.arr.length != 0){
        occur[3].combinations.push(pair);
    }
    return occur[3].combinations;
}

function findFlush(occur) {

    let i = 0,
    flush = new Flush( new Array()),
    occurences = occur[1],
    values = occur[0],
    gsorter = occur[2];
    
    occurences.forEach(o => {
        if(o >= 5){
            gsorter.forEach( c => {
                if(values[i] == c.siu ){
                    flush.arr.push(c); 
                }
            });
        }
        i++;
    });

    if(flush.arr.length != 0){
        occur[3].combinations.push(flush);
    }
    
    return occur[3].combinations;
}

function findHighCard(p1,p2,gameOutput){
    let comb1 = p1.combinations,
        comb2 = p2.combinations,
        ph1 = finalSort([p1.firstCard,p1.secondCard]).desc(v => v.val),
        ph2 = finalSort([p2.firstCard,p2.secondCard]).desc(v => v.val),
        ph3 = finalSort([p1.firstCard,p1.secondCard]).asc(v => v.val),
        ph4 = finalSort([p2.firstCard,p2.secondCard]).asc(v => v.val),
        HighCardFound = new HighCard(new PokerCard()),
        msg = 3;

    if(comb1.length == 0 && comb2.length == 0 || gameOutput == 3){
        if(ph4[0].val != 1 && ph3[0].val != 1 || ph4[0].val == 1 && ph3[0].val == 1){
            if(ph1[0].val > ph2[0].val){
                HighCardFound.card = ph1[0];
                p1.combinations.push(HighCardFound);
                msg = 1;
            }
            if(ph2[0].val > ph1[0].val){
                HighCardFound.card = ph2[0];
                p2.combinations.push(HighCardFound);
                msg = 2;
            }
            if(ph1[0].val == ph2[0].val && ph4[0].val != 1 && ph3[0].val != 1){
                if(ph1[1].val > ph2[1].val){
                    HighCardFound.card = ph1[1];
                    p1.combinations.push(HighCardFound);
                    msg = 1;
                }
                if(ph2[1].val > ph1[1].val){
                    HighCardFound.card = ph2[1].val;
                    p1.combinations.push(HighCardFound);
                    msg = 2;
                }
                if(ph1[1].val == ph2[1].val){
                    msg = 3;
                }
            }
        }
        if(ph4[0].val == 1 && ph3[0].val != 1){
            msg = 2;
        }
        if(ph3[0].val == 1 && ph4[0].val != 1){
            msg = 1;
        }
    }
    return msg;
}
function analyCombWithSameValue(p1,p2){
    let res = 3;
    let hcomb1 = p1.findHihestCombs();
    let hcomb2 = p2.findHihestCombs();

    if(hcomb1 != null && hcomb2 != null){
        if(hcomb1.value == hcomb2.value){
            res = hcomb1.compare(hcomb2);  
        }
    }
    return res;
}

function findSortedFiveCards(game,gameSorVal){
    var i = 0;
    var straight = new Straight(new Array());
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
}

