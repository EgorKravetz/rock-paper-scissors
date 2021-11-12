const computerPlay = function() {
  const arr = ['Rock','Paper','Scissors'];
  return arr[Math.floor(Math.random() * 3)];
}

const playRound = function(playerSelection, computerSelection) {
if (playerSelection == 'Rock' && computerSelection == 'Scissors') return `You win, ${playerSelection} beat ${computerSelection}`;
if (playerSelection == 'Paper' && computerSelection == 'Rock') return `You win, ${playerSelection} beat ${computerSelection}`;
if (playerSelection == 'Scissors' && computerSelection == 'Paper') return `You win, ${playerSelection} beat ${computerSelection}`;

}

const playerSelection = prompt('Enter word');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
alert(playerSelection);
