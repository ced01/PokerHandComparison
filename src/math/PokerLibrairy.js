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
    var a = [], b = [], prev, i = 0;
    var arr = null;
    var arr2 = new Array();
    var straight = new Array();
    
    if(sortByvalue){
        arr = (new Pair(null,null)).sortArrOfCardAccordingToval(pokerHand,game);
        arr.forEach(c=> {
            arr2.push(c.val);
            
        });
    } else {
        arr = (new Pair(null,null)).sortArrOfCardAccordingTosiut(pokerHand,game);
        arr.forEach(c=> {
            arr2.push(c.siu);
        });
    }
   
    for ( var i = 0; i < arr2.length; i++ ) {
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

    var i = 0, c = 0;
    var threeOfAkind = new ThreeOfAkind(new Array()),
        fourOfAkind = new FourOfAKind(new Array()), 
        pair = new Pair(new PokerCard(0,0),new PokerCard(0,0),new Array()),
        full = new Full(new Array()),
        doublePair = new DoublePair(new Array());


    var occurences = occur[1];
    var values = occur[0];
    var gsorted = occur[2];
    
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

    if(pair.arr.length > 2){
        doublePair.arr.push(pair.arr);
        pair.arr = new Array();
    }
    if(threeOfAkind.arr.length >= 1 && pair.arr.length >= 1){
        full.arr.push(new Array(threeOfAkind.arr,pair.arr));   
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

    var i = 0, c = 0;
    var flush = new Flush( new Array());

    var occurences = occur[1];
    var values = occur[0];
    var gsorter = occur[2];
    
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
    let comb1 = p1.combinations;
    let comb2 = p2.combinations;

    let ph1 = finalSort([p1.firstCard,p1.secondCard]).desc(v => v.val);
    let ph2 = finalSort([p2.firstCard,p2.secondCard]).desc(v => v.val);
    let ph3 = finalSort([p1.firstCard,p1.secondCard]).asc(v => v.val);
    let ph4 = finalSort([p2.firstCard,p2.secondCard]).asc(v => v.val);

    let HighCardFound = new HighCard(new PokerCard());
    if(comb1.length == 0 && comb2.length == 0 || gameOutput == 3){
        if(ph4[0].val != 1 && ph3[0].val != 1 || ph4[0].val == 1 && ph3[0].val == 1){
            if(ph1[0].val > ph2[0].val){
                HighCardFound.card = ph1[0];
                p1.combinations.push(HighCardFound);
                return 1;
            }
            if(ph2[0].val > ph1[0].val){
                HighCardFound.card = ph2[0];
                p2.combinations.push(HighCardFound);
                return 2;
            }
            if(ph1[0].val == ph2[0].val && ph4[0].val != 1 && ph3[0].val != 1){
                if(ph1[1].val > ph2[1].val){
                    HighCardFound.card = ph1[1];
                    p1.combinations.push(HighCardFound);
                    return 1;
                }
                if(ph2[1].val > ph1[1].val){
                    HighCardFound.card = ph2[1].val;
                    p1.combinations.push(HighCardFound);
                    return 2;
                }
                if(ph1[1].val == ph2[1].val){
                    return 3;
                }
            }
        }
        if(ph4[0].val == 1 && ph3[0].val != 1){
            return 2;
        }
        if(ph3[0].val == 1 && ph4[0].val != 1){
            return 1;
        }
    }
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



