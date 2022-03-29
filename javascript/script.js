const selection = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  const randomIndex = getRandomIndex(selection);
  return selection[randomIndex];
}

function playRound(playerSelection, computerSelection) {}

// Generate a random index number based on array length
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
