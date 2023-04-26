function playGame (playerMove) {
    const computerMove = pickComputerMove()

    let result = ''

    if (playerMove === 'rock') {

        if (computerMove === 'rock') {
         result = 'tie.'
        } else if (computerMove === 'paper') {
         result = 'you lose.'
        } else if (computerMove === 'scissors') {
         result = 'you win.'
        }

    } else if (playerMove === 'paper') {
        
        if (computerMove === 'rock') {
            result = 'you win.'
           } else if (computerMove === 'paper') {
            result = 'tie.'
           } else if (computerMove === 'scissors') {
            result = 'you lose.'
           }
    } else if (playerMove === 'scissors') {

        if (computerMove === 'rock') {
            result = 'you lose.'
           } else if (computerMove === 'paper') {
            result = 'you win.'
           } else if (computerMove === 'scissors') {
            result = 'tie.'
           }
    }

    alert(`you picked ${playerMove} and the computer picked ${computerMove}, so ${result}`)
}

let computerMove = ''

function pickComputerMove() {
    const randomNumber = Math.random()

    if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock'
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors'
    }

    return computerMove
}