const buttons = document.querySelectorAll(".options button");
const playerScoreDisplay = document.querySelector(".playerScore");
const compScoreDisplay = document.querySelector(".computerScore");
const output = document.querySelector(".output")
const resetContainer = document.querySelector(".results")
const resultsContainer = document.querySelector(".results-container")

const reset = document.createElement('button');

let playerChoice = '';
let compChoice = '';
let playerScore = 0;
let computerScore = 0;

reset.classList.add('reset');
reset.textContent = "Reset Game"

buttons.forEach(button => { button.addEventListener('click', getPlayerChoice) });
reset.addEventListener('click', () => location.reload() );

function getPlayerChoice(e) {
    playerChoice = e.target.textContent; 
    playerChoice = playerChoice.toLowerCase();

    if (playerScore !== 5 && computerScore !== 5) { // Plays 5 rounds until someone's score is equal to 5 wins and then stops until reset. 

        output.textContent = gameRound(playerChoice, computerPlay());
        compScoreDisplay.textContent = computerScore;
        playerScoreDisplay.textContent = playerScore;

         if (playerScore === 5) {
            output.textContent = "You won!!";
            resultsContainer.style.cssText= 'background-color: green';
            resetContainer.appendChild(reset);

        } else if (computerScore === 5) {
            output.textContent = "You lost!!";
            resultsContainer.style.cssText= 'background-color: red';
            resetContainer.appendChild(reset);
        }
    } 
    
    else {
        output.textContent += " - Current game is over, please click RESET GAME to play again.";
        buttons.forEach(button => { button.removeEventListener('click', getPlayerChoice) }); //disables options after game is won or lost
    }
}

function computerPlay() { //replace with swtich cases? 0,1,2?
    const choice = Math.floor(Math.random()*100)
        if (choice >= 67) {
            return 'scissors'
        }
        else if (choice >= 33 && choice <= 66) {
            return 'rock'
        }
        else
            return 'paper'
}

function gameRound(playerSelection, computerSelection) { //returns the win/lose/tie message and increments scores
    const play = playerSelection
    const comp = computerSelection
    
    //Tie game
    if (play === comp) {
        return 'Tie game!'
    }

    else if (play === 'rock' && comp === 'paper') {
        computerScore += 1;
        return 'You lose! Rock covered by paper!'
    } 
    else if (play === 'rock' && comp === 'scissors') {
        playerScore += 1;
        return 'You win! Rock breaks scissors!'
    } 

    else if (play === 'paper' && comp === 'scissors') {
        computerScore += 1;
        return 'You lose! Paper cut by scissors!'
    } 
    else if (play === 'paper' && comp === 'rock') {
        playerScore += 1;
        return 'You win! Paper covers rock!'
    } 

    else if (play === 'scissors' && comp === 'paper') {
        playerScore += 1;
        return 'You win! Scissors cut the paper!'
    } 
    else if (play === 'scissors' && comp === 'rock') {
        computerScore += 1;
        return 'You lose! Scissors crushed by rock!'
    } 
}
