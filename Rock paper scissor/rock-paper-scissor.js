const divResult = document.getElementById("resultado")
const playerImage = document.getElementById("player-choice")
const computerImage = document.getElementById("computer-choice")
let img = document.querySelector("#image-result")
let text = document.querySelector("#text-winner")
let wins = document.getElementById("value-wins")
let losses = document.getElementById("value-losses")
let ties = document.getElementById("value-ties")

function playGame(playerChoice) {
    playerChoice = parseInt(playerChoice)
    text.innerHTML = "The winner was: "
    let playerChoiceWritten = changeToWord(playerChoice)
    let computerChoice = raffleComputerChoice()
    let computerChoiceWritten = changeToWord(computerChoice)
    setImage(playerImage, playerChoiceWritten)
    setImage(computerImage, computerChoiceWritten)
    //Check if you won, lost or tied
    if(playerChoice == computerChoice) {
        let valorEmpate = parseInt(ties.innerHTML) +1
        ties.innerHTML = valorEmpate
        //Pass the image and the name when tie
        checkTheWinner(playerChoiceWritten,"Draw")
    } else if(playerChoice == 0 && computerChoice == 2 || playerChoice == 1 && computerChoice == 0 || playerChoice == 2 && computerChoice == 1) {
        let valorVitoria = parseInt(wins.innerHTML) +1
        wins.innerHTML = valorVitoria
        checkTheWinner(playerChoiceWritten,0)
    } else {
        let valorDerrota = parseInt(losses.innerHTML) +1
        losses.innerHTML = valorDerrota
        checkTheWinner(computerChoiceWritten,1)
    }
    
}


//Put the computer and player's image when he makes him choose
function setImage(index, playerChoice) {
    index.removeAttribute("src")
    changeToWord(playerChoice)
    index.setAttribute("src", "img/"+playerChoice+"-emoji.png")
}

//takes the player's Choice number and changes it to a word
function changeToWord(playerChoice) {
    if(playerChoice == 0) {
        return "rock"
    } else{
        if(playerChoice == 1) {
            return "paper"
        } else {
            return "scissors"
        }
    }
}

//Raffle the choice of computer
function raffleComputerChoice() {
    return Math.floor(Math.random() *3)
}

//Reset all the game
function reset() {
    ties.innerHTML = 0
    losses.innerHTML = 0
    wins.innerHTML = 0
    text.innerHTML = "The winner was: "
    img.removeAttribute("src")
    playerImage.removeAttribute("src",)
    computerImage.removeAttribute("src",)
}

//Show on the screen who was the winner
function checkTheWinner(image,winner) {
    if(winner == 0) {
        winner = "You"
    } else if(winner == 1) {
        winner = "Computer"
    }
    text.innerHTML += winner
    img.setAttribute("src", "img/"+image+"-emoji.png")
}




