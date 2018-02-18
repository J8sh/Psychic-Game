

// Array of alphabet letters for computer to pick from
var computerChoice = [
  "A", "B", "C", "D", "E", 
  "F", "G", "H", "I", "J", 
  "K", "L", "M", "N", "O", 
  "P", "Q", "R", "S", "T", 
  "U", "V", "W", "X", "Y", 
  "Z"
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
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

  // Adds user's guess to guessesSoFar array
  if (guessesSoFar.indexOf(userGuess) < 0 && computerChoice.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    
    guessesLeft--;
  }

  // records loss and resets game
  if (guessesLeft == 0) {
    losses++;
    alert("You lost!");
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
    alert("You won!");
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
  var winScore =  "<p><h4>Wins: " + wins + "</h4></p>";
  var lossScore =  "<p><h4>Losses: " + losses + "</h4></p>";
  var guessVar =  '<p><h3>Guesses Left: <h3 id="numberLeft">' + guessesLeft + "</h3></h3></p>"; 
  var guessSoFarVar =  "<p><h3>Your Guesses So Far: " + guessesSoFar + "</h3></p>";
  
  document.querySelector("#wins").innerHTML = winScore;
  document.querySelector("#losses").innerHTML = lossScore;
  document.querySelector("#guessLeft").innerHTML = guessVar;
  //document.querySelector("#yourGuess").innerHTML = guessSoFarVar;
  
  // change color of numberLeft
  if (guessesLeft < 10 && guessesLeft > 7){
    document.getElementById("numberLeft").style.color = "green";
  }
  if (guessesLeft < 8 && guessesLeft > 5){
    document.getElementById("numberLeft").style.color = "yellow";
  }
  if (guessesLeft < 6 && guessesLeft > 3){
    document.getElementById("numberLeft").style.color = "orange";
  }
  if (guessesLeft < 4){
    document.getElementById("numberLeft").style.color = "red";
  }

  // Fill in the guessSpace area with user guesses
  var text = "";
  for (i = 0; i < guessesSoFar.length; i++) {
    var space = '<div class="guesses col"><h3>';
    var guess = text += guessesSoFar[i] + " "; 
    var space2 = '</h3></div>';
    var complete = space + guess + space2;
  }
  if (guessesSoFar.length > 0){
  document.querySelector(".guessSpace").innerHTML = complete;
  }

}