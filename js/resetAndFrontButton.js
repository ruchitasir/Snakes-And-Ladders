const clearDisplay =()=>{
    document.getElementById('playerRolledDice').innerHTML = " ";
    document.getElementById('playerMovement').innerHTML = " ";
    document.getElementById('climbUpDown').innerHTML = " ";
    document.getElementById('sticky').style.visibility ='hidden';
}


const freshStart=()=>{
    document.getElementById('dice').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('backToFront').style.display = 'none';
    document.getElementById('winner').innerHTML = '';
    clearDisplay();
    removePlayersfromtheBoard(); // remove players from the board  
    document.getElementById('diceface').style.visibility = 'hidden';
     // to check the winning condition
     drawSmiley(950, 50,P1_COLOR,P1_STROKE_COLOR); 
     drawSmiley(850, 50,P2_COLOR,P2_STROKE_COLOR); 
     players[0].position = 91;
     players[1].position =92; 
    
}

 const removePlayersfromtheBoard=()=>{
    erasePlayerOldPos(players[0]);
    erasePlayerOldPos(players[1]);
    resetPlayerPosition();
}

const resetPlayerPosition=()=>{
    playerTurn =0;
    playerDisplayState= {diceRoll: 0,bousBefore: false, prevPosition:0,
        newPosition:0, isLadderorSnake: false, gotLadderSnake: '',
        LadderorSnakeEnd:0, bonusAfterLOrS: false, isVictorious:false};
    players[0].position = -1;
    players[1].position = -1;    
}

// Takes back to Front Rules page and starts a new game
const displayFrontAndRulesPage=()=>{
    document.getElementById('frontPage').style.display = 'inline-grid';
    document.getElementById('gameContainer').style.display='none';
    document.getElementById('startGame').style.display = 'block';
}

document.getElementById('backToFront').addEventListener('click', displayFrontAndRulesPage)
document.getElementById('restart').addEventListener('click',freshStart);


