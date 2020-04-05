
 // FUNCTIONS 
const renderBoard = () => {   
    fillEntireBoard();// Fill entire board with sqaures of 100*100
    assignNumEachSqaure(); // Assign num 1-100 on each cell of the board
    renderSnakeAndLadderImages(); // Display snakes and ladders on the board
    // Intial position of Player 1 and Player 2
    initialPlayerPosition(); // Right hand side of Canvas displays how player 1 and 2 looks
    populateSqaureWithSnakeOrLadder(); // In the square Object Array, set hasSnakeOrLadder property from laddersAndSnakes Array
    console.log('squares array',sqaures);
}
// It creates the Game board and also corresponding sqaure objects which are stored in Sqaure array
const fillEntireBoard=()=>{
     // Defining some variables to shape our drawing!
     let x = 0
     let y = 0
     let width = BOARD_SQUARE_WIDTH_HEIGHT;
     let height = BOARD_SQUARE_WIDTH_HEIGHT;
     // Context basically becomes our paintbrush. 
     //fillStyle is the INSIDE of our "drawing" strokeStyle is the OUTSIDE
     for(let column=0;column<10;column++)
     {   y= height*column;
         fillEachRow(y,width,height);
     }  
}
const fillEachRow=(y,width,height )=>{
    let x =0; let colorSqaure;
    for (let column=0;column<10;column++){
        x = width*column;
        if(column%2==0){
            context.fillStyle = colorSqaure =BOARD_SQUARE1_COLOR;
        }
        else{
            context.fillStyle = colorSqaure=BOARD_SQUARE2_COLOR;
            }
        context.strokeStyle = BOARD_SQUARE_STROKE; 
        // Creating and filling a rectangle 
        context.fillRect(x, y, width, height)
        context.strokeRect(x, y, width, height)
        createSquares(x,y,colorSqaure); // creates an array named Squares of square objects where each square is one cell on the board
    } 
}

const drawSquare = (pointX, pointY,color,border,size) => {
    // Defining the size of my rectangle
    let context = canvas.getContext('2d');
    context.fillStyle = color;
    context.strokeStyle = border;
    context.fillRect(pointX, pointY, size, size);
    context.strokeRect(pointX, pointY, size, size);
}

const assignNumEachSqaure=()=> 
{   // rendering text at 10 units right from x and 90 units down from y
    //In the square at 0,0(top left corner coordinats) text will be displayed at 10,90
    context.fillStyle = BOARD_SQUARE_STROKE;
    context.font = '50px serif';
    x=0; y=0;
    for(let j=0;j<10;j++)
    { y = 990-(100*(j));
        for(let i=0;i<10;i++)
        {  if(j%2==0){
                x =100*i+10;
            }
            else{
                x= 910-(100*i);
            }
            num = 10*j+i+1;
            console.log("num x and y",num,x, y);
            context.fillText(num, x, y);
            assignEachSqaurePosition(num,x,y);
        }
    }

}

function renderImages(x,y,imgurl)
{
    var img = new Image();
    img.onload = function () 
    {
    context.drawImage(img,x,y);
    };
    img.src = imgurl;
}
const renderSnakeAndLadderImages=()=>{
    renderImages(400,25,"images/snakeTGBL.png");
    renderImages(700,200,"images/snakeTGBR.png");
    renderImages(25,780,"images/snakeTGSR.png");
    renderImages(620,700,"images/snakeTGSR.png");
    renderImages(-20,180,"images/snakeTGSL.png");
    renderImages(145,12,"images/snakeTP2B.png");
    renderImages(400,500,"images/snakeTP2S.png");
    renderImages(400,150,"images/snakeTRSR.png");
    renderImages(500,350,"images/snakeTRSL.png");

    renderImages(200,400,"images/ladder3TSR.png");
    renderImages(750,700,"images/ladder3TSR.png");
    renderImages(-20,85,"images/ladder3TSL.png");
    renderImages(165,590,"images/ladder4TBR.png");
    renderImages(550,300,"images/ladder4TBR.png");
    renderImages(82,25,"images/ladder4TBL.png");
    renderImages(1,450,"images/ladder5TML.png");
    renderImages(600,-50,"images/ladder5TML.png");
}
const renderPlayerNames=(name,xPos,yPos)=>{
    context.fillStyle = BOARD_SQUARE_STROKE;
    context.font = '25px serif';
    context.fillText(name, xPos, yPos);
}
const initialPlayerPosition=()=>{
    drawSmiley(1050, 920,P1_COLOR,P1_STROKE_COLOR); 
    renderPlayerNames('Player1:',1008, 880);
    drawSmiley(1050, 770,P2_COLOR,P2_STROKE_COLOR);
    renderPlayerNames('Player2:',1008, 730); 
    
    drawSmiley(1050, 320,P1_COLOR,P1_STROKE_COLOR); 
    renderPlayerNames('Player1:',1008, 280);
    drawSmiley(1050, 170,P2_COLOR,P2_STROKE_COLOR);
    renderPlayerNames('Player2:',1008, 130);    
}

const drawSmiley = (pointX, pointY,color,border)=>{
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    context.arc(pointX, pointY, PLAYER_RADIUS, 0, Math.PI * 2, true);// circle
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = border;
    ctx.stroke();
    // for the smiley face
    ctx.lineWidth =2;   // for eyes and mouth, stroke line needs to be thinner
    ctx.moveTo(pointX+20, pointY);
    ctx.arc(pointX, pointY, 20, 0, Math.PI, false); // Mouth (clockwise) or inner arc
    ctx.moveTo(pointX-5, pointY-5);
    ctx.arc(pointX-7, pointY-5, 2, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(pointX+9, pointY-5);
    ctx.arc(pointX+7, pointY-5, 2, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
    // setting the linewidth back to usual 5 units
    ctx.lineWidth =LINEWIDTH;
 }
 /*-------------------------------------------------------------------------------*/
 // shows the game board and game starts when user clicks the Start Game button
 const startGame=()=>{
    document.getElementById('gameContainer').style.display='block';
    document.getElementById('startGame').style.display = 'none';
    document.getElementById('frontPage').style.display = 'none';
    freshStart(); 
 }

 document.getElementById('startGame').addEventListener('click', startGame);
 // renderBoard FUNCTION IS CALLED FIRST AS THE DOM IS LOADED
 document.addEventListener('DOMContentLoaded', renderBoard)