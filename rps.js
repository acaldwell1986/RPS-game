const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
const output = document.querySelector(".output")










buttons.forEach(button => { button.addEventListener('click', getPlayerChoice) });



function getPlayerChoice(e) {
    console.log(e.target.textContent);
  }








// const rockBtn = document.querySelector('.rock');
// const paperBtn = document.querySelector('.paper');
// const scissorsBtn = document.querySelector('.scissors');

// let playerScore = 0;
// let computerScore = 0;
// let tieCounter = 0;
// let roundCount = 0;

// // Randomly returns a value of Rock, Paper, or Scissors for CPU
// function computerPlay() {
//     const choice = Math.floor(Math.random()*100)
//         if (choice >= 67) {
//             return 'scissors'
//         }
//         else if (choice >= 33 && choice <= 66) {
//             return 'rock'
//         }
//         else
//             return 'paper'
// }

// function gameRound(playerSelection, computerSelection) { //returns the win/lose/tie message
//     const play = playerSelection
//     const comp = computerSelection
    
//     //Tie game
//     if (play === comp) {
//         return 'Tie game!'
//     }

//     else if (play === 'rock' && comp === 'paper') {
//         return 'You lose! Rock covered by paper!'
//     } 
//     else if (play === 'rock' && comp === 'scissors') {
//         return 'You win! Rock breaks scissors!'
//     } 

//     else if (play === 'paper' && comp === 'scissors') {
//         return 'You lose! Paper cut by scissors!'
//     } 
//     else if (play === 'paper' && comp === 'rock') {
//         return 'You win! Paper covers rock!'
//     } 

//     else if (play === 'scissors' && comp === 'paper') {
//         return 'You win! Scissors cut the paper!'
//     } 
//     else if (play === 'scissors' && comp === 'rock') {
//         return 'You lose! Scissors crushed by rock!'
//     } 
// }

// function gameScore (playerSelection, computerSelection) {
//     const play = playerSelection
//     const comp = computerSelection


//     if (play === comp) {
//         tieCounter++;
//         roundCount++;
//     }
//     else if (play === 'rock' && comp === 'paper') {
//         computerScore++;
//         roundCount++;
//     } 
//     else if (play === 'rock' && comp === 'scissors') {
//         playerScore++;
//         roundCount++;
//     } 
//     else if (play === 'paper' && comp === 'scissors') {
//         computerScore++;
//         roundCount++;
//     } 
//     else if (play === 'paper' && comp === 'rock') {
//         playerScore++;
//         roundCount++;
//     } 
//     else if (play === 'scissors' && comp === 'paper') {
//         playerScore++;
//         roundCount++;
//     } 
//     else if (play === 'scissors' && comp === 'rock') {
//         computerScore++;
//         roundCount++;
//     } 

//     console.log("Computer Score: " + computerScore);
//     console.log("Round Count: " + roundCount);
//     console.log("Player Score: " + playerScore);
//     console.log("Tie Count: " + tieCounter);

// }

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