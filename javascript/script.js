const selection = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

// Randomize computer selection by random index number for array element
function computerPlay() {
  const randomIndex = getRandomIndex(selection);
  return selection[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `Player Selects: ${playerSelection}\nComputer Selects: ${computerSelection}\nIt's a Tie!`;
  } else if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    return `Player Selects: ${playerSelection}\nComputer Selects: ${computerSelection}\nPlayer Wins! Computer Lose.`;
  } else {
    return `Player Selects: ${playerSelection}\nComputer Selects: ${computerSelection}\nComputer Wins! Player Lose.`;
  }
}

function game() {
  for (i = 1; i <= 5; i++) {
    let playerSelection = prompt(
      "What's Your Selection? (Rock/Paper/Scissors)",
      ""
    );
    let computerSelection = computerPlay();
    console.log(`Round: ${i}`);
    console.log(playRound(playerSelection, computerSelection));
  }
}

// Generate a random index number based on array length
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
