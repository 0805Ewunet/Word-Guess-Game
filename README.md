# Word-Guess-Game
Word Guess Game is a simple version of a hangman style game. The purpose of this assignment was to create a word guess game using JavaScript.
Link to: https://0805ewunet.github.io/Basic-Portfolio/word-guess-game/index.html

How to Play: 
Press any Alpha key (A-Z, a-z) to start the game. Non-alpha keys are ignored.
The theme of the game is ‘80’s song'. The game will randomly select a singer list from its internal list. It will then display a blank word using underscores to represent the letters in the word. 
If a correct letter is guessed, the game will reveal the letter in its correct location. If an incorrect letter is selected, then it will add the letter to a list on incorrectly guessed letters and decrement the remaining guesses count.
If the user guesses the correct singer name before remaining guesses equal zero, then the game increments the number of wins and restarts the game by selecting a new singer name and resetting the game parameters.
If the user does not guess the correct singer name within the aloted number of guesses, then the game will display a “you lose” message.

Obiter dictum:

I spent some time trying to get a modal to work when the user guessed the correct singers letter that specific singer song will play automatically. I was able to get something partially working, but I wasn't happy with its implementation and chose not to include it in the final version. Furthermore, I applied CSS to style the head and title. 
