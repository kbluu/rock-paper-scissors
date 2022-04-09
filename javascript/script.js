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
    return `player selects: ${playerSelection} || computer selects: ${computerSelection} || it's a tie!`;
  } else if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    playerScore++;
    return `player selects: ${playerSelection} || computer selects: ${computerSelection} || player wins!`;
  } else {
    computerScore++;
    return `player selects: ${playerSelection} || computer selects: ${computerSelection} || computer wins!`;
  }
}

// Generate a random index number based on array length
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

const buttons = document.querySelectorAll(".selection");
const resultsEl = document.querySelector(".results");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const winnerEl = document.querySelector(".winner");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    resultsEl.textContent = playRound(button.id, computerPlay());
    playerScoreEl.textContent = `player score: ${playerScore}`;
    computerScoreEl.textContent = `computer score: ${computerScore}`;
    winnerEl.textContent = showWinner();
    resetScore();
  });
});

function showWinner() {
  if (computerScore === 5 || playerScore === 5) {
    if (computerScore === playerScore) {
      resetGame();
      return `player score: ${playerScore} | computer score: ${computerScore} | it's a tie game!`;
    } else if (computerScore > playerScore) {
      resetGame();
      return `player score: ${playerScore} | computer score: ${computerScore} | computer wins the game!`;
    } else if (computerScore < playerScore) {
      resetGame();
      return `player score: ${playerScore} | computer score: ${computerScore} | player wins the game!`;
    }
  }
}

function resetScore() {
  if (computerScore === 5 || playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
  }
}

function resetGame() {
  resultsEl.textContent = "";
  playerScoreEl.textContent = "";
  computerScoreEl.textContent = "";
}
