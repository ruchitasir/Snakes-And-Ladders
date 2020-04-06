// THIS JS FILE CONTAINS FUNCTIONS FOR DISPLAYING MESSAGES ON SCREEN FOR WINNING, 
//IF A PLAYER HAS A LADDER OR A SNAKE ON THE POSITION


// main function which calls appropriate display methods depending  on the situation
// player is in.
// functions like renderTextOnHtml1, renderTextOnHtml2, renderTextOnHtml3
// renderTextOnHtml4, renderTextOnHtml5, winner display: shows a unique message for
// each situation. The text string in every function looks similar but it is quite
// different from the rest in terms of the message it displays
//  It also plays appropriate sound
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
         renderTextOnHtml3(player); 
         break;
  
         case(playerDisplayState.bousBefore):   
         renderTextOnHtml4(player);
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
  
 //This displays the message for the situation when the player's new
 // position has a snake or ladder and after he climbs up or goes down to a different
 // position, there he finds that positon is occupied by another player
 // so, he moves one square ahead of that position
 // It also plays appropriate sound
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
  
  //This displays the message for the situation when the player's new
 // position is occupied by another player, so he moves one square ahead of that position
 //And now this poisition has a snake or a ladder, so he moves up or down from there
 //It also plays appropriate sound
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
  
  // This displays the message for the situation when the player's new position
  //has a snake or a ladder and how he goes up or down from there
  // It also plays appropriate sound
  //  It also plays appropriate sound
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
  
 // This displays the message for the situation when the player's new position
 // is occupied by another player, so he moves one square ahead of this player
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
 
 // This displays the message for the situation when the player moves from one position
 // to another and there is no ladder or snake and the new position is also not 
 //occupied
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
  
 // This displays the message about the player who wins the game
 //and plays appropriate sound
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

