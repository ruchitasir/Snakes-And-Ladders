
const displayPosAndDice=(player,newP, dice)=>{
    let diceDisplay= document.getElementById('playerRolledDice');
   
    diceDisplay.textContent = player.name + ' rolled ' + dice + '.';
   
    if(!playerDisplayState.isVictorious)
      {
       switch(true){
         case(playerDisplayState.isLadderorSnake && playerDisplayState.bonusAfterLOrS):
         renderTextOnHtml1(player); 
         break;
  
         case(playerDisplayState.isLadderorSnake && playerDisplayState.bousBefore):
         renderTextOnHtml2(player);
         break;
  
         case(playerDisplayState.isLadderorSnake):   
         renderTextOnHtml3(player); console.log('switch only l or s');
         break;
  
         case(playerDisplayState.bousBefore):   
         renderTextOnHtml4(player);console.log('switch only bonus');
         break; 
  
         default: renderTextOnHtml5(player);
        }
      } else{
           winnerDisplay(player);
      } 
  
  }
  
  
  const renderTextOnHtml1 =(player)=>{
      let playerMoves =document.getElementById('playerMovement');
      let nextLine = document.getElementById('climbUpDown');
      let statement, text1;
        
      statement = player.name + ' at ' + playerDisplayState.prevPosition
      + ' goes to ' + playerDisplayState.newPosition+'.';
  
      if(playerDisplayState.gotLadderSnake == LADDER)
          {
            statement = statement + ' Here he climbs up to ' + playerDisplayState.LadderorSnakeEnd+' &#128515' +'.'; 
            statement = statement + ' At ' + playerDisplayState.LadderorSnakeEnd + 
            ' there is another player, so he moves to next position ' + (playerDisplayState.LadderorSnakeEnd+1) + '.';
          }
          else if(playerDisplayState.gotLadderSnake== SNAKE)
          {
              statement = statement + ' Here he falls down to ' + playerDisplayState.LadderorSnakeEnd+' &#128543' +'.'; 
              statement = statement + ' At ' + playerDisplayState.LadderorSnakeEnd + 
              ' there is another player, so he moves to next position ' + (playerDisplayState.LadderorSnakeEnd+1)+'.';
          }
  
          text1 = player.name + ' moves from ' + playerDisplayState.prevPosition +' to '
          + playerDisplayState.newPosition+ ' to '+  playerDisplayState.LadderorSnakeEnd + 
          '. And +1 which is ' + (playerDisplayState.LadderorSnakeEnd+1) +'.';
  
          playerMoves.textContent = statement;
          nextLine.textContent = text1;
  }
  
  const renderTextOnHtml2 =(player)=>{
      let playerMoves =document.getElementById('playerMovement');
      let nextLine = document.getElementById('climbUpDown');
      let statement, text1;
  
      statement = player.name + ' at ' + playerDisplayState.prevPosition
          + ' goes to ' + playerDisplayState.newPosition+'.';
  
      if(playerDisplayState.gotLadderSnake == LADDER)
      {   statement = statement + ' Here he finds another player, so moves to next ' + (playerDisplayState.newPosition +1) +'.'; 
          statement = statement + ' At ' + (playerDisplayState.newPosition +1) + 
          ' there is a ladder, so he moves to ' + (playerDisplayState.LadderorSnakeEnd) +' &#128515' ;
      }
      else if(playerDisplayState.gotLadderSnake == SNAKE)
      {   statement = statement + ' Here he finds another player, so moves to next ' + (playerDisplayState.newPosition +1)  +'.'; 
          statement = statement + ' At ' + (playerDisplayState.newPosition +1) + 
          ' there is a snake, so he falls down to ' + (playerDisplayState.LadderorSnakeEnd) +' &#128543';
      }  
  
      text1 = player.name + ' moves from '+ playerDisplayState.prevPosition +' to '
      + playerDisplayState.newPosition + ' to + 1 which is' +  (playerDisplayState.newPosition +1) 
      + ' to '+ playerDisplayState.LadderorSnakeEnd + '.';
  
      playerMoves.textContent = statement;
      nextLine.textContent = text1;
  }
  
  const renderTextOnHtml3=(player)=>{
      let playerMoves =document.getElementById('playerMovement');
      let nextLine = document.getElementById('climbUpDown');
      let statement, text1;
  
      statement =player.name + ' at ' + playerDisplayState.prevPosition
          + ' goes to ' + playerDisplayState.newPosition+'.';
  
      if(playerDisplayState.gotLadderSnake == LADDER)
      {  
          statement = statement + ' Here he climbs up to ' + playerDisplayState.LadderorSnakeEnd+' &#128515' +'.'; 
      }else if (playerDisplayState.gotLadderSnake == SNAKE){
          statement = statement + ' Here he falls down to ' + playerDisplayState.LadderorSnakeEnd+' &#128543' +'.'; 
      }
  
      text1 = player.name + ' moves from ' + playerDisplayState.prevPosition +' to '
          + playerDisplayState.newPosition+ ' to '+  playerDisplayState.LadderorSnakeEnd+'.';
      
      playerMoves.textContent = statement;
      nextLine.textContent = text1;
  }
  
  const renderTextOnHtml4=(player)=>{
      let playerMoves =document.getElementById('playerMovement');
      let nextLine = document.getElementById('climbUpDown');
      let statement, text1;
  
      statement = player.name + ' at ' + playerDisplayState.prevPosition
      + ' goes to ' + playerDisplayState.newPosition+'.';
      statement = statement + ' Here he finds another player, so moves to next ' 
      + (playerDisplayState.newPosition +1) +'.'; 
  
      text1 = player.name + ' moves from '+ playerDisplayState.prevPosition +' to '
      + playerDisplayState.newPosition + ' to + 1 which is ' +  (playerDisplayState.newPosition +1)+'.'; 
  
      playerMoves.textContent = statement;
      nextLine.textContent = text1;
  }
  
  const renderTextOnHtml5=(player)=>{
      let playerMoves =document.getElementById('playerMovement');
      let nextLine = document.getElementById('climbUpDown');
      let statement, text1;
  
      statement = player.name + ' at ' + playerDisplayState.prevPosition
      + ' goes to ' + playerDisplayState.newPosition+'.';
  
      text1 = player.name + ' moves from '+ playerDisplayState.prevPosition +' to '
      + playerDisplayState.newPosition + '.'; 
  
      playerMoves.textContent = statement;
      nextLine.textContent = text1;
  }
  
  const winnerDisplay=(player)=>{
      // play audio for winner, display on html who wins
      // hide the roll dice button
      // show the new game button
  document.getElementById('dice').style.display = 'none';
  document.getElementById('restart').style.display = 'block';
  document.getElementById('backToFront').style.display = 'block';
  document.getElementById('winner').textContent = 'Well Done! '+  `${player.name} wins the game`;
  document.getElementById('playerWin').play();
  document.getElementById('playerMovement').textContent ='Well Done! '+  `${player.name} wins the game`;
  }

  const clearDisplay =()=>{
    document.getElementById('playerRolledDice').innerHTML = " ";
    document.getElementById('playerMovement').innerHTML = " ";
    document.getElementById('climbUpDown').innerHTML = " ";
    //document.getElementsByClassName('item6down').innerHTML = " ";
    document.getElementById('dicePicture').style.visibility = 'hidden';
}


const freshStart=()=>{
    document.getElementById('dice').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('backToFront').style.display = 'none';
    document.getElementById('winner').innerHTML = '';
    clearDisplay();
    removePlayersfromtheBoard(); // remove players from the board  

     // to check the winning condition
     drawSmiley(950, 50,P1_COLOR,P1_STROKE_COLOR); 
     drawSmiley(850, 50,P2_COLOR,P2_STROKE_COLOR); 
     players[0].position = 91;
     players[1].position =92; 
     document.getElementById('dicePicture').style.visibility = 'hidden';
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
    document.getElementById('gameContainer').style.display='none';
    document.getElementById('startGame').style.display = 'block';
}

document.getElementById('backToFront').addEventListener('click', displayFrontAndRulesPage)
document.getElementById('restart').addEventListener('click',freshStart);


