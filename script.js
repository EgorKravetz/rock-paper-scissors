const computerPlay = function() {
  const arr = ['Rock','Paper','Scissors'];
  return arr[Math.floor(Math.random() * 3)];
}

const playRound = function(playerSelection, computerSelection) {
  if (playerSelection == null) {
    return `You canceled game`;}
  else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    return `You win, ${playerSelection} beat ${computerSelection}`;}
  else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    return `You win, ${playerSelection} beat ${computerSelection}`;}
  else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    return `You win, ${playerSelection} beat ${computerSelection}`;}
  else if (playerSelection == computerSelection) {
    return `Draw ps ${playerSelection} and cs ${computerSelection}`;}
    return `You lose, ${computerSelection} beat ${playerSelection}`;
   }

const playerSelection = prompt('Enter word');
const computerSelection = computerPlay();
alert(playRound(playerSelection, computerSelection));
