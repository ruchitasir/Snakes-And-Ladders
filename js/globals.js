
// CLASS AND ARRAYS AND PRIMITIVES DECLARATIONS
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