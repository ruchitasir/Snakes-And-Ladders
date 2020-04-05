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

const setPlayerDisplayStateToOriginal=()=>{
    playerDisplayState= {diceRoll: 0,bousBefore: false, prevPosition:0,
        newPosition:0, isLadderorSnake: false, gotLadderSnake: '',
        LadderorSnakeEnd:0, bonusAfterLOrS: false, isVictorious:false}; 
 }


