// Creat an array of Songs
var randomWords = ["Madonna", "Border Line", "Toto", "Africa ", "Prince", "Raspberry Beret",
  "AXL Rose", "Welcome to the Jungle"]
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 8;
var underScores = [];
var userGuesses = [];
var randomSongs;

//Function
//===================================================================
//
function startGame() {
  // picks random songs
  randWords = randWords[Math.floor(Math.rand() * randWords.length)];
  console.log('rand-words')

  for (var i = 0; i < randWords.length; i++) {
    underScores.push(' _ ');
  }
  // Printing underscores to the screen
  document.getElementById('rand-words').innerHTML = underScores.join(" ");
  console.log(underScores)

  // reset 
  LettersAlreadyGuessed = [];
  NumberofGuessesRemaining = 7;

  //HTML
  document.getElementById('guesses-left').innerHTML = guessesRemaining;

}
function winLose() {
  if (winCounter === randWords.length) {
  }
  alert('Winner');
}
if (guessesLeft === 0) {

}

// User Guesses
document.onkeyup = function (event) {
  userGuesses = event.key;
  //Checking if the letter exist inside of the word
  if (randWords.indexOf(userGuesses) > -1) {
    for (var i = 0; i < randWords.length; i++) {
      if (randWords[i] === userGuesses) {
        underScores[i] = userGuesses;
        console.log(underScores);
        winCounter++;
        winLose();
      }
    }
  }
  else {
    wrongLetters.push(userGuesses);
    guessesLeft--;
    console.log(guessesLeft);
  }
}

//Main
//===============================================================

startGame();
//
console.log();

