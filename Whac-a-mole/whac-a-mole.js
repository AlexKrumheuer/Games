const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.getElementById("time-left")
const score = document.getElementById("score")
const button = document.getElementById("button-start")
const reward = document.getElementById("reward")



let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let countDownTimerId

timeLeft.textContent = currentTime

button.addEventListener("click", moveMole)


//Create the squares
function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

    squares.forEach((square) => {
        square.addEventListener("mousedown", ()=> {
            if(square.id == hitPosition) {
                result++
                score.textContent = result
                hitPosition = null
            } else {
                result--
                score.textContent = result
            }
        })
    })

//Move the squares
function moveMole() {
    reward.style.backgroundColor = "#fff"
    button.removeEventListener("click", moveMole)
    countDownTimerId = setInterval(countDown, 1000)
    timerId = setInterval(randomSquare, 500)
}

//Time of the game
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime == 0) {
        if(result < 36 && result > 20) {
            reward.style.backgroundColor = "#B08D57"
            alert("Time is over! You scored "+result+" points. Due to it, You won a bronze trophie")
        }
        if(result > 36 && result < 81) {
            reward.style.backgroundColor = "grey"
            alert("Time is over! You scored "+result+" points. Due to it, You won a silver trophie")
        }
        if(result > 80) {
            reward.style.backgroundColor = "gold"
            alert("Time is over! You scored "+result+" points. Due to it, You won a gold trophie")
        } else {
            alert("Time is over! you scored "+result+" points.")
        }
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        button.addEventListener("click", moveMole)
        currentTime = 60
    }
}



