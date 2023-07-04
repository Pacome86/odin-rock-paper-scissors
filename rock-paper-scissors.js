
// Pseudocode:

//  1- Write a function called getComputerChoice() that will randomly return either 
//  "rock", "paper", or "scissors". ok

//  2- Write a function that play a single round of Rock Paper Scissors:

//      - playRound() should take 2 parameters (playerSelection and computerSelection)

//      - Should return a string that declares the winner
//      of the round like so: "You Lose! Paper beats Rock". ok

//      - Just return the results of this function call so we could use them later

//  3- Write a NEW function called game(). Use the previous function {inside} of this one 
//  to display the running score and announce the winner once a player reaches 5 points.



// Game:

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor((Math.random() * choices.length));
    const getComputerChoice = choices[randomChoice];
    return getComputerChoice;
}

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
      return `Tie game.`;    
  } else {
      switch (playerSelection !== computerSelection) {

          case (computerSelection === "rock"):
              if (playerSelection === "scissors") {
                  computerScore += 1;
                  return `You lose! ${computerSelection} breaks ${playerSelection}!`;
              } else if (playerSelection === "paper") {
                  playerScore += 1;
                  return `You win! ${playerSelection} covers ${computerSelection}!`;
              } break;
          
          case (computerSelection === "paper"):
              if (playerSelection === "rock") {
                  computerScore += 1;
                  return `You lose! ${computerSelection} covers ${playerSelection}!`;                
              } else if (playerSelection === "scissors") {
                  playerScore += 1;
                  return `You win! ${playerSelection} cuts ${computerSelection}!`;
              } break;
          
          case (computerSelection === "scissors"):
              if (playerSelection === "paper") {
                  computerScore += 1;
                  return `You lose! ${computerSelection} cuts ${playerSelection}!`;
              } else if (playerSelection === "rock") {
                  playerScore += 1;
                  return `You win! ${playerSelection} breaks ${computerSelection}!`;                    
              } break;
          
          default: if (playerSelection === "undefined") {
              return "Please, click a button.";
          }
      }
  }
}

// UI

function game(e) {
    
    const playerScorePara = document.querySelector('#playerScore');
    const computerScorePara = document.querySelector('#computerScore');
    const scoreMessage = document.querySelector('#scoreMessage')
    
    playerSelection = e.target.textContent;
    computerSelection = getComputerChoice();
    scoreMessage.textContent = `${playRound(playerSelection, computerSelection)}`;
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    
    // When a player scores 5 load new page with a button to play again. 
    
    if (playerScore === 5 || computerScore === 5) {
        
        scoreMessage.textContent = `${winGame()}`;
        if (playerScore > computerScore) {
            setTimeout(() => window.location.href = 'winRestart.html', 1000);
            // window.location.href = 'winRestart.html';
        } else {
            setTimeout(() => window.location.href = 'lostRestart.html', 1000);
            // window.location.href = 'lostRestart.html';
        }      
    }
}

function winGame() {
    if (playerScore > computerScore) {
        return `Player score is: ${playerScore}. Computer score is: ${computerScore}. You win!`;
    } else if (computerScore > playerScore) {
        return `Player score is: ${playerScore}. Computer score is: ${computerScore}. You lose`;
    } else {
        return `Player score is: ${playerScore}. Computer score is: ${computerScore}. Tie game!`;
    }
}

window.addEventListener('click', game);
