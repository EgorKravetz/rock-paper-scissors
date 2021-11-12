const computerPlay = function() {
  const arr = ['rock','paper','scissors'];
  return arr[Math.floor(Math.random() * 3)];
}

const playRound = function(playerSelection, computerSelection) {
  if (playerSelection == null) {
    return `You canceled game`}
  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return `You win, ${playerSelection} beat ${computerSelection}`}
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return `You win, ${playerSelection} beat ${computerSelection}`}
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return `You win, ${playerSelection} beat ${computerSelection}`}
  else if (playerSelection == computerSelection) {
    return `Draw ps ${playerSelection} and cs ${computerSelection}`}
    return `You lose, ${computerSelection} beat ${playerSelection}`;
   }

const playerPrompt = prompt('Enter word');
const playerSelection = playerPrompt.toLowerCase()
const computerSelection = computerPlay();
playerSelection
alert(playRound(playerSelection[0]
  .toUpperCase() + '' + playerSelection
  .slice(1), computerSelection[0]
  .toUpperCase() + '' + computerSelection
  .slice(1)));
