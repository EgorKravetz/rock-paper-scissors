const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');

buttonRock.textContent = 'Rock';
buttonPaper.textContent = 'Paper';
buttonScissors.textContent = 'Scissors';

buttonRock.className = 'btn';
buttonPaper.className = 'btn';
buttonScissors.className = 'btn';

const divForBtn = document.querySelector('.buttons.container')
let display = document.querySelector('.img.items.text');

divForBtn.append(buttonRock);
divForBtn.append(buttonPaper);
divForBtn.append(buttonScissors);

let pScore = 0;
let cScore = 0;

let playerImage = document.querySelector('.img.items.player');
let compImage = document.querySelector('.img.items.comp');
let playerImageSrc = playerImage.getAttribute('src');
let compImageSrc = compImage.getAttribute('src');
      
const computerPlay = function() {
  const arr = ['Rock','Paper','Scissors'];
  return arr[Math.floor(Math.random() * 3)];
  }

  const buttons = document.querySelectorAll('.btn');
  const updateScore = () => { 
    let scorePlayer = document.querySelector('.score.items.player');
    let scoreComp = document.querySelector('.score.items.comp');
    scorePlayer.textContent = pScore;
    scoreComp.textContent = cScore;
  }
    
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const computerSelection = computerPlay();
      playRound(this.textContent, computerSelection);
        playerImage.setAttribute('src', `./assets/png/${this.textContent}.png`);
        compImage.setAttribute('src', `./assets/png/${computerSelection}.png`);
        playerImage.setAttribute('src', `./assets/png/${this.textContent}.png`);
        compImage.setAttribute('src', `./assets/png/${computerSelection}.png`);
  })
})

      const playRound = function(playerSelection, computerSelection) {

        if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
          display.textContent = `You win, ${playerSelection} beat ${computerSelection}`;
          pScore++;
          updateScore();
          return
          
       } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        display.textContent = `You win, ${playerSelection} beat ${computerSelection}`;
         pScore++;
         updateScore();
         return

       } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
         display.textContent = `You win, ${playerSelection} beat ${computerSelection}`
         pScore++;
         updateScore();
         return

       } else if (playerSelection == computerSelection) {
         return display.textContent = `Draw ps ${playerSelection} and cs ${computerSelection}`;

       } else {
           display.textContent = `You lose, ${computerSelection} beat ${playerSelection}`;
           cScore++;
           updateScore();
           return
          }
        }
