//THIS FILE CONTAINS HELPER FUNCTIONS TO 1)CREATE OBJECTS OF CLASS SQUARE AND STORES 
// THEM 2) FUNCTIONS CALLED WHEN THE DICE BUTTON IS CLICKED TO RENDER PLAYER TO 
//NEW POSITIONS,ERASE OLD POSITION AND RENDER THE GAME BOARD

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

// returns the object named square based on its id passed as 'pos' or position
const fetchSquare=(pos)=>{
    let item;
    sqaures.forEach(function(cell){ if(cell.squareNum==pos)
        { item= cell;}})
        return item; 
}

// draws player to the new square position
const renderPlayerToNewPos=(squareObj,pl)=>{
    let xCoord =squareObj.x + (BOARD_SQUARE_WIDTH_HEIGHT/2);
    // we add BOARD_SQUARE_WIDTH_HEIGHT/2 to x and y coordinates so that player in the form
    // of a small cirlce (radius 30 units) appears in the center of each cell or sqaure(100*100)
    let yCoord =squareObj.y + (BOARD_SQUARE_WIDTH_HEIGHT/2);
    drawSmiley(xCoord, yCoord,pl.color,pl.strokeColor);
}

// erases the players in the form of smileys from their old position
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

// As the players are erased, those squares also lose their color and number
// This function renders the board back
const renderBackTheBoard=(squareObj)=>{
    // render the Sqaure of the board back with its original color
    drawSquare(squareObj.x,squareObj.y,squareObj.squareColor,BOARD_SQUARE_STROKE,BOARD_SQUARE_WIDTH_HEIGHT);
    // render the number back on the board
    renderSqaureNum(squareObj);
    renderSnakeAndLadderImages();
}

//As the players are erased, those squares also lose their color and number
// This function renders the number on the board back
const renderSqaureNum=(squareObj)=>{
    context.fillStyle = BOARD_SQUARE_STROKE;
    context.font = '50px serif';
    let xpos = squareObj.x+10;//text displayed at 10 units from top left corner horizontally of that square
    let ypos = squareObj.y+90;//text displayed at 90 units down from top left corner vertically of that square
    context.fillText(squareObj.squareNum, xpos, ypos);
}

// playerDisplayState object is used to store the state of the player later on
// for display purpose on the screen
const setPlayerDisplayStateToOriginal=()=>{
    playerDisplayState= {diceRoll: 0,bousBefore: false, prevPosition:0,
        newPosition:0, isLadderorSnake: false, gotLadderSnake: '',
        LadderorSnakeEnd:0, bonusAfterLOrS: false, isVictorious:false}; 
 }


