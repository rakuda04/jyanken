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
      displayResult('Draw!');
    } else if (winningCombinations[userChoice] === computerChoice) {
      displayResult('player wins!');
    } else {
      displayResult('computer wins!');
    }
  }

  Round(playerChoice, computerChoice);

const btn = document.querySelectorAll.btn.forEach('#guutext,#paatext,#chokitext');
btn.addEventListener('click',getUserChoice(e)){
return getUserChoice(e);
}

function getUserChoice(e.target.id){
  if id == jyanken.getElementById('#guutext'){
    return 'rock'
  }
  else if id == jyanken.getElementById("#paatext"){
    return 'paper'
  }
  else if id == jyanken.getElementById("#chokitext"){
    return 'scissors'
}
}

  function displayResult(result) {
    let displayResult = document.getElementById('displayResult');
    displayResult.innerText = result;
  }
  

  