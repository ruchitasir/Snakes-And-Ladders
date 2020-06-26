// THIS JS FILE CONTAINS FUNCTIONS FOR RESTARING THE GAME AND GETTING BACK TO
// FRONT AND RULES PAGE

// clears the dice button and hides the board to go back to rules page
const clearDisplay =()=>{
    document.getElementById('playerRolledDice').innerHTML = " ";
    document.getElementById('playerMovement').innerHTML = " ";
    document.getElementById('climbUpDown').innerHTML = " ";
    document.getElementById('sticky').style.visibility ='hidden';
}

//starts and restarts the game
const freshStart=()=>{
    document.getElementById('dice').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('backToFront').style.display = 'none';
    document.getElementById('winner').innerHTML = '';
    clearDisplay();
    removePlayersfromtheBoard(); // remove players from the board  
    document.getElementById('diceface').style.visibility = 'hidden';
    pauseAndLoadAudioForWinner();

      // TEST CODE:to check the winning condition
    //   drawSmiley(950, 50,P1_COLOR,P1_STROKE_COLOR); 
    //   drawSmiley(850, 50,P2_COLOR,P2_STROKE_COLOR); 

      players[0].position = 91;
      players[1].position =92; 
 
}

//once the game is started or restarted, players are not anymore on the board
 const removePlayersfromtheBoard=()=>{
    erasePlayerOldPos(players[0]);
    erasePlayerOldPos(players[1]);
    resetPlayerPosition();
}

//resets the globals and initialises player to original state
const resetPlayerPosition=()=>{
    playerTurn =0;
    playerDisplayState= {diceRoll: 0,bousBefore: false, prevPosition:0,
        newPosition:0, isLadderorSnake: false, gotLadderSnake: '',
        LadderorSnakeEnd:0, bonusAfterLOrS: false, isVictorious:false};
    players[0].position = -1;
    players[1].position = -1;    
}

const pauseAndLoadAudioForWinner=()=>{
    document.getElementById('playerWin').pause();
    document.getElementById('playerWin').load();
}

// Takes back to Front (Rules) page and starts a new game
const displayFrontAndRulesPage=()=>{
    document.getElementById('frontPage').style.display = 'inline-grid';
    document.getElementById('gameContainer').style.display='none';
    document.getElementById('startGame').style.display = 'block';
    pauseAndLoadAudioForWinner();
}

document.getElementById('backToFront').addEventListener('click', displayFrontAndRulesPage)
document.getElementById('restart').addEventListener('click',freshStart);


