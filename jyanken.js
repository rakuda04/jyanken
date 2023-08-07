const btn = document.querySelectorAll('#guutext,#paatext,#chokitext');
  
btn.forEach(button => {
  button.addEventListener('click', playRound);
});

function playRound(e) {
  const playerChoice = getUserChoice(e);
  const computerChoice = getComputerChoice();
  Round(playerChoice, computerChoice);
}

function getUserChoice(e) {
  const id = e.target.id;
  
  if (id === 'guutext') {
    return 'rock';
  }
  else if (id === 'paatext') {
    return 'paper';
  }
  else if (id === 'chokitext') {
    return 'scissors';
  }
}

function getComputerChoice() {
  const GAME_OPTIONS = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  const randomChoice = GAME_OPTIONS[randomNumber];
  return randomChoice;
}

function Round(userChoice, computerChoice) {
  const winningCombinations = {
    'paper': 'rock',
    'rock': 'scissors',
    'scissors': 'paper',
  };

  if (userChoice === computerChoice) {
    displayResult('Draw!');
  } else if (winningCombinations[userChoice] === computerChoice) {
    displayResult('Player wins!');
  } else {
    displayResult('Computer wins!');
  }
}

function displayResult(result) {
  let displayResult = document.getElementById('displayResult');
  displayResult.innerText = result;
}
