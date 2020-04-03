// creates a sqaure object assciated with each square/cell on the board and
// push it into the array sqaures
const createSquares=(xPos,yPos,squareColor)=>{
    squareCell = new square(0,xPos,yPos,squareColor);
    sqaures.push(squareCell);
}

// on each sqaure grid, the user can see the number 1-100
// we use this number or position  to identify each object and store it in squareNum property
const assignEachSqaurePosition=(number,xP,yP)=>{  
    // xp, yp are not the top left coordinate for each cell
    //but xPos and yPos are the top left coordinates for each cell
    let xPos = xP-10; let yPos = yP-90; 
       sqaures.forEach(function(cell){
        if(cell.x == xPos && cell.y == yPos)
        { cell.squareNum = number;
            console.log('object Ids',number,xPos,yPos);
        } 
    })
}

// populating each sqaure's hasSnakeOrLadder property with ladder's isSnakeOrLadder property 
//if they have the same position. We are assigning this property so that we can check if the player 
// on that square will be bitten and move down or move up the ladder
const populateSqaureWithSnakeOrLadder=()=>{
    sqaures.forEach(function(cell){
        laddersAndSnakes.forEach(function (ld){
            if(cell.squareNum == ld.start)
            { cell.hasSnakeOrLadder = ld.isSnakeOrLadder;
            }
        })
    })
}

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
    document.getElementById('dicePicture').style.visibility='visible';
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
 //   let newPosition = newP;
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
    displayPosAndDice(pl,newP,diceRoll);
    setPlayerDisplayStateToOriginal();
}

 const setPlayerDisplayStateToOriginal=()=>{
    playerDisplayState= {diceRoll: 0,bousBefore: false, prevPosition:0,
        newPosition:0, isLadderorSnake: false, gotLadderSnake: '',
        LadderorSnakeEnd:0, bonusAfterLOrS: false, isVictorious:false}; 
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
    // erase Player's old Position  
    erasePlayerOldPos(pl);
    pl.position =  newPosition;
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

const fetchSquare=(pos)=>{
    let item;
    sqaures.forEach(function(cell){ if(cell.squareNum==pos)
        { item= cell;}})
        return item; 
}
const renderPlayerToNewPos=(squareObj,pl)=>{
    let xCoord =squareObj.x + (BOARD_SQUARE_WIDTH_HEIGHT/2);
    // we add BOARD_SQUARE_WIDTH_HEIGHT/2 to x and y coordinates so that player in the form
    // of small cirlce (radius 30 units) appears in the center of each cell or sqaure(100*100)
    let yCoord =squareObj.y + (BOARD_SQUARE_WIDTH_HEIGHT/2);
    drawSmiley(xCoord, yCoord,pl.color,pl.strokeColor);
}
const erasePlayerOldPos=(pl)=>{
    if(pl.position!=-1){
        let squareObj= fetchSquare(pl.position); 
        //removes the player circle and also the entire square on which player is positioned
        context.clearRect(squareObj.x,squareObj.y,BOARD_SQUARE_WIDTH_HEIGHT,BOARD_SQUARE_WIDTH_HEIGHT);
        //context.clearRect(squareObj.x+20,squareObj.y+20,60,60);
        // As the player moves on a different sqaure, the current square's color and number
        // disappears, so the below function fills the square with color and number again
        renderBackTheBoard(squareObj);      
    }  
}
const checkNewPosOccupied=(newP,pl)=>{
    let posOfOtherPlayer; 
    let newPosition = newP;
    if(pl.id==1){// if current player is player 1 and its new position is already occupied with Player2
        // call player 2 at index 1 to check and then increment player 1 position by 1 if they match
        posOfOtherPlayer = players[1].position;
        if(newP==posOfOtherPlayer)
        {
            newPosition= newP +1;
        }
    } else{// if current player is player 2 and its new position is already occupied with Player1
        // call player 1 at index 0 to check and then increment player 2 position by 1 if they match
        posOfOtherPlayer = players[0].position;
        if(newP==posOfOtherPlayer)
        {
            newPosition= newP +1;
        }
    }
     return newPosition;
}

const renderBackTheBoard=(squareObj)=>{
    // render the Sqaure of the board back with its original color
    drawSquare(squareObj.x,squareObj.y,squareObj.squareColor,BOARD_SQUARE_STROKE,BOARD_SQUARE_WIDTH_HEIGHT);
    // render the number back on the board
    renderSqaureNum(squareObj);
    renderSnakeAndLadderImages();
}
const renderSqaureNum=(squareObj)=>{
    context.fillStyle = BOARD_SQUARE_STROKE;
    context.font = '50px serif';
    let xpos = squareObj.x+10;//text displayed at 10 units from top left corner horizontally of that square
    let ypos = squareObj.y+90;//text displayed at 90 units down from top left corner vertically of that square
    context.fillText(squareObj.squareNum, xpos, ypos);
}


document.getElementById('dice').addEventListener('click',rollDice);

