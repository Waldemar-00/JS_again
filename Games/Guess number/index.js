const atFirst = document.querySelector('header button')
const checkOut = document.querySelector('.wrapper button')
const h2 = document.querySelector('h2')
const input = document.querySelector("[type = 'number']")
const gameMessage = document.querySelector('#game-message')
const pointsNumber = document.querySelector('#points span')
const bestResultNumber = document.querySelector('#best-result span')

function randomNum() {
  return Math.floor(Math.random() * 20 + 1)
}
const gameNumber = randomNum()

function startNewGame() {
  h2.innerText = '???'
  input.value = ''
  gameMessage.innerText = 'Start guessing!'
  pointsNumber.innerText = '20'
  bestResult.innerText = `Best Result: ${pointsNumber.innerText}`
  return randomNum()
}
function checkNumber() {
  const numberFromInput = Number(input.value)
  if (numberFromInput > gameNumber) {
    gameMessage.innerText = 'Too much!'
    pointsNumber.innerText = pointsNumber.innerText - 1
  }
  if (numberFromInput < gameNumber) {
    gameMessage.innerText = 'Too few!'
    pointsNumber.innerText = pointsNumber.innerText - 1
  }
  if (numberFromInput === gameNumber) {
    gameMessage.innerText = 'YOU WIN!'
    pointsNumber.innerText = pointsNumber.innerText - 1
    bestResultNumber.innerText = pointsNumber.innerText
    h2.classList.add('win')
    h2.innerText = gameNumber
  }
}
atFirst.addEventListener('click', startNewGame)
checkOut.addEventListener('click', checkNumber)
