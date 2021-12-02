

// Randomly returns a value of Rock, Paper, or Scissors
function computerPlay() {
    let choice = Math.floor(Math.random()*100)
        if (choice >= 66) {
            return 'Scissors'
        }
        else if (choice >= 33 && choice <= 65) {
            return 'Rock'
        }
        else
            return 'Paper'
}
