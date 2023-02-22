"use Strict";
// invoking this function will randomly return 3 outputs:  rock, paper or scissors
const getComputerChoice = function () {
  const randomNumber = Math.trunc(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    return `Rock`;
  } else if (randomNumber === 2) {
    return `Paper`;
  } else {
    return `Scissors`;
  }
};

let playerPick = prompt("Rock, Paper or Scissors?");
const playerChoice = function () {
  // Using prompt function to allow user to input his/her choice and store the value in a variable

  // These 2 variables below allow user input to be case insensitive by forcing a convention which is executed regardless of how the user types the required answer.
  const firstLetterOfName = playerPick.slice(0, 1).toUpperCase();
  const restOfLetterName = playerPick.slice(1, playerPick.length).toLowerCase();
  playerPick = firstLetterOfName + restOfLetterName;
  return playerPick;
};

// Variables for player's Score and computer's Score.
let playerScore = 0;
let computerScore = 0;

// Variable that stores the output of the computer's choice function
const computerChoice = getComputerChoice();

// This function takes a single round of the game and returns a string the declares the winner of the round.
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return `You lose😞 ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `You win 🏆 ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You lose😞 ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You win 🏆 ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return `You lose😞 ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You win 🏆 ${playerSelection} beats ${computerSelection}`;
  } else {
    return `It's a draw🚩🚩`;
  }
};

// The for loop iterates from round 1 through round 5
// For each iteration, It determines the winner and adds a score to winner
for (let i = 1; i <= 5; i++) {
  // invoking this function adds a score to winner based on each round
  const game = function (round) {
    if (playRound(playerChoice(), computerChoice).includes("You win 🏆")) {
      playerScore += 1;
    } else if (
      playRound(playerChoice(), computerChoice).includes("You lose😞")
    ) {
      computerScore += 1;
    } else {
      // Adds 0 to each score incase of a draw
      playerScore += 0;
      computerScore += 0;
    }

    console.log(
      `You chose ${playerChoice()} and the computer chose ${computerChoice}`
    );
    console.log(playRound(playerChoice(), computerChoice));
    console.log(playerScore, computerScore);
  };
  game(i);
}

// This condition determines the winner based on 5 rounds of the game
if (playerScore > computerScore) {
  console.log(`Kudos! You won🏆 ( ${playerScore} vs ${computerScore} )`);
} else if (computerScore > playerScore) {
  console.log(`Whoops! You lost😔 ( ${playerScore} vs ${computerScore} )`);
} else {
  console.log(`It is a draw🚩🚩 ( ${playerScore} vs ${computerScore} )`);
}
