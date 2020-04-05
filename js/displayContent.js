
const displayPosAndDice=(player, dice)=>{
    let diceDisplay= document.getElementById('playerRolledDice');
    let otherPlayer = anotherPlayerInfo(player);
    let fullText = player.name + ' rolled ' + dice + '.';
    let fullText1 =  otherPlayer.name + ' at ' + otherPlayer.position+'.' ;
    diceDisplay.innerHTML = '<br>'+fullText+'<br>'+fullText1;

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
  
 const anotherPlayerInfo=(pl)=>{
    if(pl.name == players[0].name){
        return players[1];
    }
    else { return players[0];}
 }
  
  const renderTextOnHtml1 =(player)=>{
      let playerMoves =document.getElementById('playerMovement');
      let nextLine = document.getElementById('climbUpDown');
      let statement, text1;
        
      statement = player.name + ' at ' + playerDisplayState.prevPosition
      + ' goes to ' + playerDisplayState.newPosition+'.';
  
      if(playerDisplayState.gotLadderSnake == LADDER)
          {
            statement = statement + ' Here he climbs up to ' + playerDisplayState.LadderorSnakeEnd +'.'; 
            statement = statement + ' At ' + playerDisplayState.LadderorSnakeEnd + 
            ' there is another player, so he moves to next position ' + (playerDisplayState.LadderorSnakeEnd+1) + '.';
            document.getElementById('climbingLadder').play();
        }
          else if(playerDisplayState.gotLadderSnake== SNAKE)
          {
              statement = statement + ' Here he falls down to ' + playerDisplayState.LadderorSnakeEnd +'.'; 
              statement = statement + ' At ' + playerDisplayState.LadderorSnakeEnd + 
              ' there is another player, so he moves to next position ' + (playerDisplayState.LadderorSnakeEnd+1)+'.';
              document.getElementById('snakeBitten').play();
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
          ' there is a ladder, so he moves to ' + (playerDisplayState.LadderorSnakeEnd);
          document.getElementById('climbingLadder').play();
      }
      else if(playerDisplayState.gotLadderSnake == SNAKE)
      {   statement = statement + ' Here he finds another player, so moves to next ' + (playerDisplayState.newPosition +1)  +'.'; 
          statement = statement + ' At ' + (playerDisplayState.newPosition +1) + 
          ' there is a snake, so he falls down to ' + (playerDisplayState.LadderorSnakeEnd);
          document.getElementById('snakeBitten').play();
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
          statement = statement + ' Here he climbs up to ' + playerDisplayState.LadderorSnakeEnd+'.'; 
          document.getElementById('climbingLadder').play();
        }else if (playerDisplayState.gotLadderSnake == SNAKE){
          statement = statement + ' Here he falls down to ' + playerDisplayState.LadderorSnakeEnd+'.'; 
          document.getElementById('snakeBitten').play();
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
  document.getElementById('winner').textContent = 'Well Done! '+  `${player.name} wins the game`+'.';
  document.getElementById('playerWin').play();
  document.getElementById('playerMovement').textContent ='Well Done! '+  `${player.name} wins the game`+'.';
  document.getElementById('climbUpDown').innerHTML='<p>&#128515  &#128515 &#128515 &#128515  &#128515 &#128515 &#128515  &#128515 &#128515</p>';
  }

