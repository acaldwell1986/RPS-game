const buttons = document.querySelectorAll("button");
const playerScoreDisplay = document.querySelector(".playerScore");
const compScoreDisplay = document.querySelector(".compScore");
const output = document.querySelector(".output")


let playerChoice = '';
let compChoice = '';
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => { button.addEventListener('click', getPlayerChoice) });

function getPlayerChoice(e) {
    playerChoice = e.target.textContent; 
    playerChoice = playerChoice.toLowerCase();
    console.log(gameRound(playerChoice, computerPlay()));
}


function computerPlay() {
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




function gameRound(playerSelection, computerSelection) { //returns the win/lose/tie message
    const play = playerSelection
    const comp = computerSelection
    
    //Tie game
    if (play === comp) {
        return 'Tie game!'
    }

    else if (play === 'rock' && comp === 'paper') {
        return 'You lose! Rock covered by paper!'
    } 
    else if (play === 'rock' && comp === 'scissors') {
        return 'You win! Rock breaks scissors!'
    } 

    else if (play === 'paper' && comp === 'scissors') {
        return 'You lose! Paper cut by scissors!'
    } 
    else if (play === 'paper' && comp === 'rock') {
        return 'You win! Paper covers rock!'
    } 

    else if (play === 'scissors' && comp === 'paper') {
        return 'You win! Scissors cut the paper!'
    } 
    else if (play === 'scissors' && comp === 'rock') {
        return 'You lose! Scissors crushed by rock!'
    } 
}



// function game() {

//     if (playerScore !== 5 || computerScore !== 5) {

//         rockBtn.addEventListener('click', () => {
//             let cpuChoice = computerPlay();
//             gameRound('rock', cpuChoice);
//             gameScore('rock', cpuChoice);
//         });
        
//         paperBtn.addEventListener('click', () => {
//             gameRound('paper', computerPlay());
//         });
        
//         scissorsBtn.addEventListener('click', () => {
//             gameRound('scissors', computerPlay());
//         });
        
//     }

//     else if (playerScore === 5 || computerScore === 5) {
//         rockBtn.removeEventListener('click', () => {
//             let cpuChoice = computerPlay();
//             gameRound('rock', cpuChoice);
//             gameScore('rock', cpuChoice);
//         });
//         console.log("fasasdas")
//     }
    
// }

// game();

// console.log(typeof computerScore)