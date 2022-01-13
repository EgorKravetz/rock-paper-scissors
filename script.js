const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');

const section = document.createElement('section');


buttonRock.textContent = 'Rock';
buttonPaper.textContent = 'Paper';
buttonScissors.textContent = 'Scissors';

buttonRock.className = 'btn';
buttonPaper.className = 'btn';
buttonScissors.className = 'btn';


document.body.append(buttonRock)
document.body.append(buttonPaper)
document.body.append(buttonScissors)

const computerPlay = function() {
  const arr = ['Rock','Paper','Scissors'];
  return arr[Math.floor(Math.random() * 3)];
  }

  const buttons = document.querySelectorAll('.btn');


  buttons.forEach(button => {
    button.addEventListener('click', function() {
    playRound(this.textContent, computerPlay());
    })
  })

const playRound = function(playerSelection, computerSelection) {
  
  if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
   return console.log(`You win, ${playerSelection} beat ${computerSelection}`)
 }
 else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
   return console.log(`You win, ${playerSelection} beat ${computerSelection}`)
 }
 else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
   return console.log(`You win, ${playerSelection} beat ${computerSelection}`)
 }
 else if (playerSelection == computerSelection) {
   return console.log(`Draw ps ${playerSelection} and cs ${computerSelection}`)
 }
   else {
     return console.log(`You lose, ${computerSelection} beat ${playerSelection}`);
    }
  }
 

