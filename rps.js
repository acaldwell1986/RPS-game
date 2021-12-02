

// Randomly returns a value of Rock, Paper, or Scissors
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


function gameRound(playerSelection, computerSelection) {
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


function playerPrompt() {
    return prompt('Choose Rock, Paper, or Scissors?').toLowerCase()
}

function game() {

    for (let i = 0; i < 5; i++) {
        console.log(gameRound(playerPrompt(), computerPlay()))
        
    }
}

game();