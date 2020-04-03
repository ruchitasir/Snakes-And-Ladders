
// CLASS AND ARRAY AND PRIMITIVES DECLARATIONS
class square {
    constructor(squareId, xPos, yPos, color) {
        this.squareNum = squareId;
        this.x = xPos;
        this.y = yPos;
        this.squareColor = color;
        this.hasSnakeOrLadder = '';
    }
}
const LADDER = 'L';
const SNAKE = 'S';
let sqaures = [];
let laddersAndSnakes = [{start:4, end:25,isSnakeOrLadder:LADDER},
                        {start:12, end:29,isSnakeOrLadder:LADDER},
                        {start:19, end:2,isSnakeOrLadder:SNAKE},
                        {start:28, end:13,isSnakeOrLadder:SNAKE},
                        {start:33, end:52,isSnakeOrLadder:LADDER},
                        {start:38, end:42,isSnakeOrLadder:LADDER},
                        {start:43, end:57,isSnakeOrLadder:LADDER},
                        {start:45, end:27,isSnakeOrLadder:SNAKE},
                        {start:55, end:77,isSnakeOrLadder:LADDER},
                        {start:68, end:47,isSnakeOrLadder:SNAKE},
                        {start:71, end:49,isSnakeOrLadder:SNAKE},
                        {start:79, end:81,isSnakeOrLadder:LADDER},
                        {start:80, end:62,isSnakeOrLadder:SNAKE},
                        {start:85, end:66,isSnakeOrLadder:SNAKE},
                        {start:89, end:93,isSnakeOrLadder:LADDER},
                        {start:96, end:74,isSnakeOrLadder:SNAKE},
                        {start:99, end:65,isSnakeOrLadder:SNAKE},
                       ]
let playerTurn = 0; // turn specifies which player will roll the dice, 0 for P1 and 1 for P2
let playerDisplayState= {diceRoll: 0,bousBefore: false, prevPosition:0,
    newPosition:0, isLadderorSnake: false, gotLadderSnake: '',
    LadderorSnakeEnd:0, bonusAfterLOrS: false, isVictorious:false}; // maintains the state for Html display of player moves
/*-------------------------------------------------------------------------------*/
 // CANVAS DECLARATIONS
 const CANVAS_UNIT_WIDTH = 1100;
 const CANVAS_UNIT_HEIGHT = 1000;
 const CONTEXT_UNIT = 1000;
 const TRANSLATE = 0;
 const BOARD_SQUARE_WIDTH_HEIGHT = 100;
 const BOARD_SQUARE1_COLOR = 'brown';
 const BOARD_SQUARE2_COLOR = 'gold';
 const BOARD_SQUARE_STROKE = 'black';

 //const PL_WIDTH_HEIGHT = 60 // Width and height both are same as 60
 const PLAYER_RADIUS = 30;
 const LINEWIDTH = 5;

 const P1_COLOR ='cyan'; // player 1 is actually a small square
 const P1_STROKE_COLOR = 'red'

 const P2_COLOR = 'pink';
 const P2_STROKE_COLOR = 'purple' ;
 /*-------------------------------------------------------------------------------*/
 let players = [{name:'Player1',id: 1,position:-1, color:P1_COLOR, strokeColor: P1_STROKE_COLOR},
                {name:'Player2',id: 2,position:-1, color:P2_COLOR, strokeColor: P2_STROKE_COLOR}];
 
/*-------------------------------------------------------------------------------*/
 // Grabbing canvas element off the page
 let canvas = document.getElementById('canvas');
 // Setting canvas dimensions
 canvas.width = CANVAS_UNIT_WIDTH;
 canvas.height = CANVAS_UNIT_HEIGHT;
 // Context defines how we interact with our canvas--in this event, 2D!
 let context = canvas.getContext('2d');
// Setting context dimensions so that it matches our canvas size
context.width = CONTEXT_UNIT;
context.height = CONTEXT_UNIT;
context.lineWidth =LINEWIDTH;
context.translate(TRANSLATE, TRANSLATE);
 /*-------------------------------------------------------------------------------*/
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

    // to check the winning condition
    /*
    drawSmiley(950, 50,P1_COLOR,P1_STROKE_COLOR); 
    drawSmiley(850, 50,P2_COLOR,P2_STROKE_COLOR); 
    players[0].position = 91;
    players[1].position =92; */

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
// renderBoard FUNCTION IS CALLED FIRST AS THE DOM IS LOADED
document.addEventListener('DOMContentLoaded', renderBoard)