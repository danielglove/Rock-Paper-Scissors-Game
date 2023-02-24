"use Strict";

// Starting conditions for the game.
let playerScore = 0;
let computerScore = 0;
let playerPick;
let computerChoice;

// invoking this function will randomly return any of the 3 outputs:  rock, paper or scissors
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

// Adding event listeners to the various game buttons.
const gameButtons = document.querySelectorAll(".btn");
gameButtons.forEach(function (gameButton) {
  gameButton.addEventListener("click", function (e) {
    // Variable gets the input of the user's choice
    playerPick = e.target.innerText;

    // Variable gets the output of the computer's choice
    computerChoice = getComputerChoice();
    game();
  });
});

// This function takes a single round of the game and returns a string the declares the winner.
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

// invoking this function adds a score to winner based on each round
const game = function (round) {
  if (playRound(playerPick, computerChoice).includes("You win 🏆")) {
    getWinner();
    playerScore += 1;
  } else if (playRound(playerPick, computerChoice).includes("You lose😞")) {
    getWinner();
    computerScore += 1;
  } else {
    getWinner();
    // Adds 0 to each score incase of a draw
    playerScore += 0;
    computerScore += 0;
  }

  console.log(
    `You chose ${playerPick} and the computer chose ${computerChoice}`
  );
  console.log(playRound(playerPick, computerChoice));
  console.log(playerScore, computerScore);
};

// Invoking this function determines the winner based on the first player to score 5 points
const getWinner = function () {
  if (playerScore === 5 && playerScore > computerScore) {
    console.log(`Kudos! You won🏆 ( ${playerScore} vs ${computerScore} )`);
  } else if (computerScore === 5 && computerScore > playerScore) {
    console.log(`Whoops! You lost😔 ( ${playerScore} vs ${computerScore} )`);
  } else if (
    (playerScore === 5 && playerScore === computerScore) ||
    (computerScore === 5 && computerChoice === playRound)
  ) {
    console.log(`It is a draw🚩🚩 ( ${playerScore} vs ${computerScore} )`);
  }
};
