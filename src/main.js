let game = new PokerGame();
let playerOneHand = new PokerHand(1);
let playerTwoHand = new PokerHand(2);

$(document).ready(function(){
    $(".generate").on("click",function(){

        $("#msg-result").html("");

        let pokerCard = new PokerCard(0,0);
        playerOneHand = new PokerHand(1);
        playerTwoHand = new PokerHand(2);
        //52 cards generation*
        game.generateDeck();
        
        //Hand are dealt
        playerOneHand.firstCard = game.pickACard();
        playerTwoHand.firstCard = game.pickACard();
        playerOneHand.secondCard = game.pickACard();
        playerTwoHand.secondCard = game.pickACard();

        //Game on the table is provided they are betting for each chosen card*/
        game.dealTheGameOnTheTable();

        // Analyse player hand one
        let p1occurVal = occur(playerOneHand,game,true);
        let p1occurSiu = occur(playerOneHand,game,false);
        let p1flush = findFlush(p1occurSiu);
        let p1Comb = findFTPFu(p1occurVal);
        
        // Analyse player hand two
        let p2occurVal = occur(playerTwoHand,game,true);
        let p2occurSiu = occur(playerTwoHand,game,false);
        let p2flush = findFlush(p2occurSiu);
        let p2Comb = findFTPFu(p2occurVal);


        
        if(playerOneHand.combinations.length != 0){
            console.log("Player One Hand :");
            console.log(playerOneHand.combinations);
        }

        if(playerTwoHand.combinations.length != 0){
            console.log("Player Two Hand :");
            console.log(playerTwoHand.combinations);
        }
        
        let str1 = pokerCard.transformValueIntoString(game.firstCard.val) + " " + pokerCard.transformSiutIntoString(game.firstCard.siu);
        let str2 = pokerCard.transformValueIntoString(game.secondCard.val) + " " + pokerCard.transformSiutIntoString(game.secondCard.siu);
        let str3 = pokerCard.transformValueIntoString(game.thirdCard.val) + " " + pokerCard.transformSiutIntoString(game.thirdCard.siu);
        let str4 = pokerCard.transformValueIntoString(game.fourthCard.val) + " " + pokerCard.transformSiutIntoString(game.fourthCard.siu);
        let str5 = pokerCard.transformValueIntoString(game.fifthCard.val) + " " + pokerCard.transformSiutIntoString(game.fifthCard.siu);

        $("#playerOnefirstCard").val(pokerCard.transformValueIntoString(playerOneHand.firstCard.val)+" "+pokerCard.transformSiutIntoString(playerOneHand.firstCard.siu));
        $("#playerOneSecondCard").val(pokerCard.transformValueIntoString(playerOneHand.secondCard.val)+" "+pokerCard.transformSiutIntoString(playerOneHand.secondCard.siu));
        $("#playerTwofirstCard").val(pokerCard.transformValueIntoString(playerTwoHand.firstCard.val)+" "+pokerCard.transformSiutIntoString(playerTwoHand.firstCard.siu));
        $("#playerTwoSecondCard").val(pokerCard.transformValueIntoString(playerTwoHand.secondCard.val)+" "+pokerCard.transformSiutIntoString(playerTwoHand.secondCard.siu));
        $("#five-cards").val(str1 + " - " + str2 + " - " + str3 + " - " + str4 + " - " + str5);
    });
    $(".res").on("click",function(){
        $("#msg-result").html(playerOneHand.compareWith(playerTwoHand));
    });
});
