const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft =document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assign the id of the reandomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id
}

square.forEach(id => {
 id.addEventListener('mouseup', () =>{
  if(id.id === hitPosition){
    result += 1 
    score.textContent = result
  }
 })
})

function moveMole() {
  let timeID = null
  timeID = setInterval(randomSquare,500,1000)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if(currentTime === 0 ) {
    clearInterval(timerId)
    alert('GAME OVER! Your Final Score Is ' + result)
  }
}

let timerId = setInterval(countDown,500,1000)

