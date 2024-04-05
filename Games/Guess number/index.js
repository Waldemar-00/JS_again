const atFirst = document.querySelector('header button')
const checkOut = document.querySelector('.wrapper button')
const h2 = document.querySelector('h2')
const input = document.querySelector("[type = 'number']")
const gameMessage = document.querySelector('#game-message')
const pointsNumber = document.querySelector('#points span')
const bestResultNumber = document.querySelector('#best-result span')
let prevValue = ''
function randomNum() {
  return Math.floor(Math.random() * 20 + 1)
}
let gameNumber = randomNum()

function startNewGame() {
  gameNumber = randomNum()
  checkOut.addEventListener('click', checkNumber)
  h2.innerText = '???'
  input.value = ''
  prevValue = ''
  bestResultNumber.innerText = `${pointsNumber.innerText}`
  gameMessage.innerText = 'Start guessing!'
  pointsNumber.innerText = '20'
  return randomNum()
}

function checkNumber() {
  if (prevValue == input.value) return
  prevValue = input.value
  if (input.value > gameNumber) {
    gameMessage.innerText = 'Too much!'
    pointsNumber.innerText = pointsNumber.innerText - 1
  }
  if (input.value < gameNumber) {
    gameMessage.innerText = 'Too few!'
    pointsNumber.innerText = pointsNumber.innerText - 1
  }
  if (input.value == gameNumber) {
    gameMessage.innerText = 'YOU WIN!'
    pointsNumber.innerText = pointsNumber.innerText - 1
    bestResultNumber.innerText = pointsNumber.innerText
    h2.classList.add('win')
    h2.innerText = gameNumber
    checkOut.removeEventListener('click', checkNumber)
  }
}
atFirst.addEventListener('click', startNewGame)
checkOut.addEventListener('click', checkNumber)
