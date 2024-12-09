
const playerNameInput = document.getElementById('playerName');
const startGameButton = document.getElementById('startGame');
const gameArea = document.getElementById('gameArea');
const rollDiceButton = document.getElementById('rollDice');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const playerDiceDisplay = document.getElementById('playerDice');
const computerDiceDisplay = document.getElementById('computerDice');
const roundResult = document.getElementById('roundResult');
const winnerMessage = document.getElementById('winnerMessage');

let playerName = '';
let playerScore = 0;
let computerScore = 0;


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


startGameButton.addEventListener('click', () => {
  playerName = playerNameInput.value.trim();
  if (playerName === '') {
    alert('Ange ditt namn för att starta spelet.');
    return;
  }
  document.getElementById('playerScore').textContent = `${playerName}: 0`;
  gameArea.classList.remove('hidden');
  startGameButton.disabled = true;
});


rollDiceButton.addEventListener('click', () => {
  let playerDice = [];
  let computerDice = [];
  let playerSum = 0;
  let computerSum = 0;


  for (let i = 0; i < 5; i++) {
    let dice = rollDice();
    playerDice.push(dice);
    playerSum += dice;
  }

  for (let i = 0; i < 5; i++) {
    let dice = rollDice();
    computerDice.push(dice);
    computerSum += dice;
  }


  playerDiceDisplay.textContent = `${playerName}'s tärningar: ${playerDice.join(', ')}`;
  computerDiceDisplay.textContent = `Datorns tärningar: ${computerDice.join(', ')}`;


  if (playerSum > computerSum) {
    playerScore++;
    roundResult.textContent = `${playerName} vann omgången!`;
  } else if (computerSum > playerSum) {
    computerScore++;
    roundResult.textContent = 'Datorn vann omgången!';
  } else {
    roundResult.textContent = 'Oavgjort!';
  }


  playerScoreDisplay.textContent = `${playerName}: ${playerScore}`;
  computerScoreDisplay.textContent = `Dator: ${computerScore}`;


  if (playerScore === 5 || computerScore === 5) {
    let winner = playerScore === 5 ? playerName : 'Datorn';
    winnerMessage.textContent = `${winner} vann spelet!`;
    winnerMessage.classList.remove('hidden');
    rollDiceButton.disabled = true;

  
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
});
