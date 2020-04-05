
const rollDice =()=>{
    clearDisplay();  
    console.log('dice rolled');
    let roll = generateDiceNum(); // creates a number from 1 to 6
    displayDiceImages(roll); // display dice image according to the roll
    console.log('roll', roll);
   // display the dice rolled
   //Move the player1 according to the dice rolled
    movePlayer(roll);
}
const displayDiceImages=(diceRoll)=>{
    let diceName = 'dice'+diceRoll;
   document.getElementById('sticky').style.visibility ='visible';
   document.getElementById('diceface').style.visibility='visible';
   document.getElementById('diceface').src = 'images/'+diceName+'.png';
}

const generateDiceNum=()=>{
    let roll = Math.floor((Math.random() * 6) + 1);
   return roll;
}


const movePlayer =(diceRoll)=>{
    let newPosition =0,player;
    if(playerTurn==0)
    { //player1 will move
        if(players[0].position ==-1)
        { // Initial position of player1 is not on the board, 
          //we consider it position 0 denoted by x and y as -1 
            newPosition = diceRoll;
        }else{ // current position + diceroll gives me next position
            newPosition = players[0].position + diceRoll;
        }   
        playerTurn =1; // changing the turn to 1 for player 2 to move next time
        player = players[0];
    }else //if(playerTurn == 1) player 2 will move
    {
        if(players[1].position ==-1)
        { // Initial position of player1 is not on the board, 
          //we consider it position 0 denoted by x and y as -1 
            newPosition = diceRoll;
        }else{ //current position + diceroll gives me next position
            newPosition = players[1].position + diceRoll;
        }   
        playerTurn =0; // changing the turn to 0 for player 1 to move next time
        player = players[1];
    }
    console.log('newPosition , player',newPosition,player.id);
    displayPlayerMoves(newPosition,player,diceRoll);
}

const displayPlayerMoves=(newP, pl,diceRoll)=>{
    // check if the new Pos is occupied by the other player and if it is move onto the next pos
    playerDisplayState.diceRoll = diceRoll;
    playerDisplayState.prevPosition = pl.position;
    playerDisplayState.newPosition = newP;
    let newPosition = checkNewPosOccupied(newP,pl);
    if(newP+1 == newPosition)
    {
        playerDisplayState.bousBefore = true;// for displaying the bonus on Html
    }
    // check for winner
    let isWinner = winningCondition(newPosition,pl);  
    playerDisplayState.isVictorious = isWinner;
    if(!isWinner){
     keepGoing(newPosition,pl);
    }  
    console.log('playerDisplayState', playerDisplayState);
    displayPosAndDice(pl,diceRoll);
    setPlayerDisplayStateToOriginal();  
}

const checkNewPosOccupied=(newP,pl)=>{
    let posOfOtherPlayer; 
    let newPosition = newP;
    if(pl.id==1){// if the current player is player 1 and its new position is already occupied with Player2
        // call player 2 at index 1 to check and then increment player 1 position by 1 if they match
        posOfOtherPlayer = players[1].position;
        if(newP==posOfOtherPlayer)
        {
            newPosition= newP +1;
        }
    } else{// if the current player is player 2 and its new position is already occupied with Player1
        // call player 1 at index 0 to check and then increment player 2 position by 1 if they match
        posOfOtherPlayer = players[0].position;
        if(newP==posOfOtherPlayer)
        {
            newPosition= newP +1;
        }
    }
     return newPosition;
}

const winningCondition =(newP, player)=>{
    let win = false;
    if(newP>=100){
        newP =100;  // move this player to 100
        let squareObj= fetchSquare(newP);
        renderPlayerToNewPos(squareObj,player);// display the player on board on 100th position
        erasePlayerOldPos(player);
        player.position =  newP;   
        win = true;
    }
    return win;
}

const keepGoing=(newPosition,pl)=>{
    let climbUpDownPos;
     //fetch the sqaure on which player will be moving to
    let squareObj= fetchSquare(newPosition); console.log('player moved',squareObj);
    if(squareObj.hasSnakeOrLadder==LADDER ||squareObj.hasSnakeOrLadder==SNAKE)
    { //At this position the player will either climb up or go down
     //we will look at the end position from the laddersAndSnakes array
     // And set the new position to the end position of the ladder or array
     laddersAndSnakes.forEach(function (ld){
         if(ld.start == squareObj.squareNum){ 
         // if the start on a particular object of LadderAndSnake array is the same as the position/sqaureNum of the square
         // we would like to get the end position of that object and move the player to the new position
         // Either he climbs or goes down-depending on the value of end position
         climbUpDownPos = ld.end;
         }})
        let newSquare = fetchSquare(climbUpDownPos); // getting the new square obj from the new position we will set on the player
        // check if the end pos is occupied
        newPosition = checkNewPosOccupied(newSquare.squareNum,pl);
        if(newPosition == climbUpDownPos+1){
            playerDisplayState.bonusAfterLOrS = true;
        }
        newSquareObj= fetchSquare(newPosition);
        setTimeout(renderPlayerToNewPos(newSquareObj,pl),2000);
        // Saving the state to display on html appropriate content
        playerDisplayState.isLadderorSnake = true;
        playerDisplayState.gotLadderSnake = squareObj.hasSnakeOrLadder;
        playerDisplayState.LadderorSnakeEnd = climbUpDownPos;
    }
    else{
        renderPlayerToNewPos(squareObj,pl);    
    }
    erasePlayerOldPos(pl);
    pl.position =  newPosition;
}

document.getElementById('dice').addEventListener('click',rollDice);