# Snakes-And-Ladders
A worldwide classic board game based on sheer luck to win. 

# Description
It's a racing game where each player has to reach the top position usually marked as 100th as earlier as they can, using the help of ladders and avoiding the snakes in between. The player who reaches first wins the game. Each player rolls the dice to determine their next position on the board, and there can be a base of the ladder or a snake on the next position. The number on the dice indicates the number of steps the player can take to move from his previous position to new. 

When the player is at the base of the ladder, he gets the chance to climb up to the top of the ladder and that will be his new position. The player will stay there until the next turn. The player does not move to the bottom of the ladder. If he meets a snake, the snake bite will take him down to the end of the snake's tail and that will be his new position. The player will stay there until the next turn.

# Technologies Used
Javascript, CSS, HTML and HTML Canvas

# Instructions
The current version of this game is a two player game. The first screen of the game describes all the rules in detail on how to play the game. It has a start button, which starts the game once you click on it. The game board and a dice button appears on the screen with two smileys representing player 1 and player 2 on the game. As the dice button is clicked, the player 1 moves according to the number, dice indicates. Second click on the dice button will give chance to player 2 to move on the board. This way the players alternate between the dice clicks to take turns. 

Access this game online at: https://ruchitasir.github.io/Snakes-And-Ladders/

To install this game:
Fork this repository. Click clone and copy the HTTPS link. Open the terminal, go to the directory (using the cd command) where you would like to add this repo as the sub-directory and run git clone HTTPS-link(you copied). Access the repository by changing the directory to Snakes and Ladders (cd Snakes and Ladders). Run the following command open index.html. It will open the Html page in the browser to play the game.

# Development Process (Approx 6.5 days)
In the initial phase, pseudo-code and a to-do list in the form of handwritten documents were created. Verified the feasibile implementation of the project within the timeframe by creating a base model of the game with some functioning logic. When the game appeared to be feasible, the actual process of design and implementation began:

Game logic in Javascript is built with the following best practices:
Creating separate modules to implement main actions of the game, logic is broken down into simple, clean  and DRY  pieces of code
Objects and functions are used appropriately for efficient programming and functions were sub-divided into a  series of small functions. Code is well commented and formatted for readability
Code is developed in an iterative model where it is designed, implemented, tested and revised. As the code is revised, HTML and stylings were also changed to give a good user experience.
The entire game logic was tested thoroughly by repeatedly playing the game with different test cases. And it is also written in a way that it naturally avoids many errors and debugging issues. 
When the code passed the testing phase, it is then committed and pushed to Github. The next revision began after the changes were committed.
Simultaneously researched on the Canvas features, CSS grids, HTML tags, javascript object-oriented programming, how to use GIMP and various CSS selectors to use the updated versions and functionalities in the game logic.
Separating code into several javascript files according to the function performed by them.
Ensured that the game meets all the requirements and it is fully functional.

Day 1 included wireframing, planning game logic, creating the board of the game using Canvas, working with images scaling them, rotating them, making them transparent using Gimp software. The goal here was to write code efficiently and in a way it naturally avoids a lot of time spent in debugging.

Day 2 was building function logic for the dice button, rendering the players on the board, handling the movements of the players and repeated testing. The goal from here was to come up with a fully functional game- meeting the basic requirements instead of adding extra functionalities or trying to do something harder within the time frame given.

Day 3 was about improvising the HTML and CSS design to implement the DOM manipulation and sending messages on the screen about the player movements.  Tested the module for bugs.

Day 4 Developed logic for restarting the game and going to the rules page and starting the game from the rules page. Spend a good amount of time in styling the pages and revising the code based on the suggestions of my instructor at the General Assembly. I also sought the opinion of my family members about the look and feel of the game and whether it is intuitive enough to play and get excited.

Day 5 A minimum viable product was finally created. And features like adding sound-effects for victory, ladder climbing and snake bitting were added. Some GIF images from giphy were used to make a more entertaining environment for the game. The messages and the text boxes on the screen were improvised for winning conditions and for the movements of the players on the board.

Day 6 Created a readMe file, removed any commented lines of code, divided the code into several javascript files, added some extra comments in Javascript files and also organized the CSS files and the images folder. A fully functional game that is finally deployed at Github.

# Future Developments:

To make the game scalable from two players to single and multiplayer.

To have the moves of the player animated instead of directly hopping from one position to another. With the time constraints and no extra frameworks, it was quite hard to show the smooth movements of the players but I did the best I can to have the best user experience.

To make the game mobile-friendly.

# Acknowledgements

To my instructor and TA's at General Assembly. My classmates (SEI-30) for creating a very supoortive environemnt to learn and grow together. And my very loving and encouraging family.


