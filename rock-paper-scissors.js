                                /* PLAN */

// Inputs:
// The computer choose randomly between : "rock", "paper", or "scissors".
// Prompt the user to choose between: "rock", "paper", or "scissors".

// Desired Output: 
// - A function called score that store the result of each round 
// for the computer and the player; then the higher score is returned:
// function playerRoundScore vs computerRoundScore (you win = +1, you lose = -1)

// - Function computerGameScore vs playerGameScore
// determine the winner after 5 round game that keeps score
// and reports a winner or looser at the end. 

// Pseudocode:
//  1- Write a function called getComputerChoice() that will randomly return either 
//  "rock", "paper", or "scissors".

//  2- Write a function that play a single round of Rock Paper Scissors:

//      - The function called playRound() should take 2 parameters 
//      (playerSelection and computerSelection). ok

//      -The function should return a string that declares the winner
//      of the round like so: "You Lose! Paper beats Rock". ok

//      - The function’s playerSelection parameter is case-insensitive 
//      (so users can input rock, ROCK, RocK or any other variation).

//      - I want to return the results of this function call, not console.log() 
//      them; because I am going to use the return later on.

//  3- Test the function playRound() by using console.log() to see the results:

        /* function playRound(playerSelection, computerSelection) {
            // your code here!
            }
 
            const playerSelection = "rock";
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection)); */

//  4- Write a NEW function called game().Use the previous function {inside} of this one 
//  to play a 5 round game that keeps score and reports a winner or loser at the end.

//      - Call playRound function 5 times in a row (or use a loop).
//      - Use console.log() to display the result of each round and the winner at the end.
//      - Use prompt to get input from the user.

                    /*         END OF PLAN     */
                    
                            /* STEP ONE */               

//  1- Write a function called getComputerChoice that will randomly return either 
//  "rock", "paper", or "scissors".

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor((Math.random() * choices.length));
    const getComputerChoice = choices[randomChoice];
    return getComputerChoice;
}

// Test the function getComputerChoice()
//console.log(getComputerChoice());

                /* TEST OK - END OF THE FIRST STEP */

                        /* STEP TWO */

//  2- Write a function that play a single round of Rock Paper Scissors:

//      - The function playRound() takes 2 parameters (playerSelection, computerSelection)
//      return a string that declares the winner
//      of the round like so: "You Lose! Paper beats Rock".

//      - The parameter playerSelection is case-insensitive via .toLowerCase
//      (so users can input rock, ROCK, RocK or any other variation).

//      - All of the results of this function are return, not console.log
//      because I want to use them later on. 


  function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It is a tie.";
    } else {
        switch (playerSelection.toLowerCase() !== computerSelection) {
            
            case (computerSelection === "rock"):
                if (playerSelection.toLowerCase() === "scissors") {
                    return "You lose! Rock breaks Scissors.";
                } else if (playerSelection.toLowerCase() === "paper") {
                    return "You win! Paper covers Rock.";
                } break;
            
            case (computerSelection === "paper"):
                if (playerSelection.toLowerCase() === "rock") {
                    return "You lose! Paper covers Rock.";
                } else if (playerSelection.toLowerCase() === "scissors") {
                    return "You win! Scissors cuts Paper.";
                } break;
            
            case (computerSelection === "scissors"):
                if (playerSelection.toLowerCase() === "paper") {
                    return "You lose! Scissors cuts Paper.";
                } else if (playerSelection.toLowerCase() === "rock") {
                    return "You win. Rock breaks Scissors.";
                } break;
            
            default: return "I don't understand you!";
        }
    }
}

                    /* STEP THREE: TEST playRound() */
// 3- Test ok for the function playRound by using console.log() to see the results:

/*const playerSelection = "paper"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/

/* STEP FOUR: TEST playRound() */
// Write a NEW function call game()