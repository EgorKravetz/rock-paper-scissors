const computerPlay = function() {
  const arr = ['rock','paper','scissors'];
  return arr[Math.floor(Math.random() * 3)];
}



const playRound = function(playerSelection, computerSelection) {
  if (playerSelection == null) {
    return `You canceled game`}
  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return `You win, ${playerSelection[0]
      .toUpperCase() + '' + playerSelection
      .slice(1)} beat ${computerSelection[0]
      .toUpperCase() + '' + computerSelection
      .slice(1)}`}
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return `You win, ${playerSelection[0]
      .toUpperCase() + '' + playerSelection
      .slice(1)} beat ${computerSelection[0]
      .toUpperCase() + '' + computerSelection
      .slice(1)}`}
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return `You win, ${playerSelection[0]
      .toUpperCase() + '' + playerSelection
      .slice(1)} beat ${computerSelection[0]
      .toUpperCase() + '' + computerSelection
      .slice(1)}`}
  else if (playerSelection == computerSelection) {
    return `Draw ps ${playerSelection[0]
      .toUpperCase() + '' + playerSelection
      .slice(1)} and cs ${computerSelection[0]
      .toUpperCase() + '' + computerSelection
      .slice(1)}`}
    else {
      return `You lose, ${computerSelection[0]
      .toUpperCase() + '' + computerSelection
      .slice(1)} beat ${playerSelection[0]
        .toUpperCase() + '' + playerSelection
        .slice(1)}`;
     }
   }

   const playerSelection = prompt('Enter word');
/*

   //const playerSelection = playerPrompt.toLowerCase()

   const playerSelection = null? "You canceled game" : playerPrompt.toLowerCase();
*/
   const computerSelection = computerPlay();

alert(playRound(playerSelection, computerSelection));
