//move all logic here

function getComputerChoice() {
    const GAME_OPTIONS = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const randomChoice = GAME_OPTIONS[randomNumber];
    return randomChoice;
  }

  const computerChoice = getComputerChoice();
  const playerChoice = //prompt("じゃんけんぽん！").toLowerCase(); change this into key input

  function Round(userChoice, computerChoice) {
    const winningCombinations = {
      'paper': 'rock',
      'rock': 'scissors',
      'scissors': 'paper',
    };

    if (userChoice === computerChoice) {
      console.log("Draw!");
    } else if (winningCombinations[userChoice] === computerChoice) {
      console.log("Player wins!");
    } else {
      console.log("Computer wins!");
    }
  }

  Round(playerChoice, computerChoice);