const game = new PokerGame();
let playerOneHand = new PokerHand(1);
let playerTwoHand = new PokerHand(2);


$(document).ready(function(){
    $(".generate").on("click",function(){

        $("#msg-result").html("");
        playerOneHand = new PokerHand(1);
        playerTwoHand = new PokerHand(2);
        let pcd = new PokerCard(0,0);
        let p2occurVal = null,
            p2occurSiu = null,
            p1occurVal = null,
            p1occurSiu = null; 
        
        //52 cards generation*
        game.generateDeck();
        
        //Hand are dealt
        /*playerOneHand.firstCard = game.pickACard();
        playerTwoHand.firstCard = game.pickACard();
        playerOneHand.secondCard = game.pickACard();
        playerTwoHand.secondCard = game.pickACard();*/

        playerOneHand.firstCard = new PokerCard(3,4);
        playerTwoHand.firstCard = new PokerCard(11,1);
        playerOneHand.secondCard = new PokerCard(3,1);
        playerTwoHand.secondCard = new PokerCard(10,1);

        //Game on the table is provided they are betting for each chosen card*/
        game.dealTheGameOnTheTable();

        // Analyse player hand one
        p1occurVal = occur(playerOneHand,game,true);
        p1occurSiu = occur(playerOneHand,game,false);
        p1flush = findFlush(p1occurSiu);
        p1Comb = findFTPFu(p1occurVal);
        
        // Analyse player hand two
        p2occurVal = occur(playerTwoHand,game,true);
        p2occurSiu = occur(playerTwoHand,game,false);
        p2flush = findFlush(p2occurSiu);
        p2Comb = findFTPFu(p2occurVal);


        
        if(playerOneHand.combinations.length != 0){
            console.log("Player One Hand :");
            console.log(playerOneHand.combinations);
        }

        if(playerTwoHand.combinations.length != 0){
            console.log("Player Two Hand :");
            console.log(playerTwoHand.combinations);
        }
        
        let str1 = pcd.transformValueIntoString(game.firstCard.val) + " " + pcd.transformSiutIntoString(game.firstCard.siu);
        let str2 = pcd.transformValueIntoString(game.secondCard.val) + " " + pcd.transformSiutIntoString(game.secondCard.siu);
        let str3 = pcd.transformValueIntoString(game.thirdCard.val) + " " + pcd.transformSiutIntoString(game.thirdCard.siu);
        let str4 = pcd.transformValueIntoString(game.fourthCard.val) + " " + pcd.transformSiutIntoString(game.fourthCard.siu);
        let str5 = pcd.transformValueIntoString(game.fifthCard.val) + " " + pcd.transformSiutIntoString(game.fifthCard.siu);

        $("#playerOnefirstCard").val(pcd.transformValueIntoString(playerOneHand.firstCard.val)+" "+pcd.transformSiutIntoString(playerOneHand.firstCard.siu));
        $("#playerOneSecondCard").val(pcd.transformValueIntoString(playerOneHand.secondCard.val)+" "+pcd.transformSiutIntoString(playerOneHand.secondCard.siu));
        $("#playerTwofirstCard").val(pcd.transformValueIntoString(playerTwoHand.firstCard.val)+" "+pcd.transformSiutIntoString(playerTwoHand.firstCard.siu));
        $("#playerTwoSecondCard").val(pcd.transformValueIntoString(playerTwoHand.secondCard.val)+" "+pcd.transformSiutIntoString(playerTwoHand.secondCard.siu));
        $("#five-cards").val(str1 + " - " + str2 + " - " + str3 + " - " + str4 + " - " + str5);
    });
    $(".res").on("click",function(){
        $("#msg-result").html(playerOneHand.compareWith(playerTwoHand));
    });
});
