

// Array of alphabet letters for computer to pick from
var computerChoice = [
  "a", "b", "c", "d", "e", 
  "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", 
  "p", "q", "r", "s", "t", 
  "u", "v", "w", "x", "y", 
  "z"
];

// Set variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// guessesSoFar is an array that will hold all the user's guesses
var guessesSoFar = [];

// userGuess is what the user picks by pressing a key
var userGuess = null;

// Have computer pick a letter and store it in letterToBeGuessed
var letterToBeGuessed = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(
      "Wins: " + wins + 
      " Losses: " + losses + 
      " GuessesLeft: " + guessesLeft + 
      " Guesses so far: " + guessesSoFar + 
      " Computer picked: " + letterToBeGuessed);


document.onkeyup = function(event) {

  // When user presses a key and shows on user quess list
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // Adds user's guess to guessesSoFar array
  if (guessesSoFar.indexOf(userGuess) < 0 && computerChoice.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    
    guessesLeft--;
  }

  // records loss and resets game
  if (guessesLeft == 0) {
    losses++;
    console.log("You lost!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(
      "Wins: " + wins + 
      " Losses: " + losses + 
      " GuessesLeft: " + guessesLeft + 
      " Guesses so far: " + guessesSoFar + 
      " Computer picked: " + letterToBeGuessed);
  }

  // records win and resets game
  if (letterToBeGuessed == userGuess) {
    wins++;
    console.log("You won!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(
      "Wins: " + wins + 
      " Losses: " + losses + 
      " GuessesLeft: " + guessesLeft + 
      " Guesses so far: " + guessesSoFar + 
      " Computer picked: " + letterToBeGuessed);
  }

  // Displays HTML
  var html = 
      "<p><h1>The Psychic Game</h1></p>" + 
      "<p><h3>Guess what letter I\'m thinking of</h3></p>" + 
      "<p><h3>Wins: " + wins + "</h3></p>" + 
      "<p><h3>Losses: " + losses + "</h3></p>" + 
      "<p><h3>Guesses Left: " + guessesLeft + "</h3></p>" + 
      "<p><h3>Your guesses so far: " + guessesSoFar + "</h3></p>";
  
  document.querySelector("#game").innerHTML = html;

}