const atFirst = document.querySelector('header button')
const checkOut = document.querySelector('.wrapper button')
const h2 = document.querySelector('h2')
const input = document.querySelector("[type = 'number']")
const gameMessage = document.querySelector('#game-message')
const pointsNumber = document.querySelector('#points span')
const bestResultNumber = document.querySelector('#best-result span')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')
let prevValue = ''
let gameNumber = randomNum()
function randomNum() {
  return Math.floor(Math.random() * 20 + 1)
}
function closePopup() {
  // popup.classList.remove('view')
  popup.close()
  close.removeEventListener('click', closePopup)
}

function startNewGame() {
  gameNumber = randomNum() //Git does not see this changing
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
  if (prevValue == input.value) {
    // popup.classList.add('view')
    popup.show()
    close.addEventListener('click', closePopup)
    return
  }
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

if (window.screen.width <= 400) {
  document.querySelector('h1').innerText = 'Guess!'
  document.querySelector('header div').innerText = '<From 1 - 20>'
}
