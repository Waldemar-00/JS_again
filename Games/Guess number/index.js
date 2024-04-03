const atFirst = document.querySelector('header button')
const checkOut = document.querySelector('.wrapper button')
const h2 = document.querySelector('h2')
const input = document.querySelector("[type = 'number']")
const gameMessage = document.querySelector('#game-message')
const points = document.querySelector('#points')
const bestResult = document.querySelector('#best-result')

function randomNum() {
  return Math.floor(Math.random() * 20 + 1)
}
const gameNumber = randomNum()

function startNewGame() {
  h2.innerText = '???'
  input.value = ''
  gameMessage = 'Start guessing!'
  bestResult.innerText = points.innerText
  points.innerText = '20'
  return randomNum()
}
function checkNumber() {
  const numberFromInput = Number(document.querySelector("[type = 'number']").value)
  if (numberFromInput > gameNumber) {
    gameMessage.innerText = 'Too much!'
    const points = document.querySelector('#points')
    points.innerText = 'Points: ' + (points.innerText.split('').slice(-2).join('') - 1)
  }
  if (numberFromInput < gameNumber) {
    gameMessage.innerText = 'Too few!'
    const points = document.querySelector('#points')
    points.innerText = 'Points: ' + (points.innerText.split('').slice(-2).join('') - 1)
  }
  if (numberFromInput === gameNumber) {
    gameMessage.innerText = 'You are right!'
    const points = document.querySelector('#points')
    points.innerText = 'Points: ' + (points.innerText.split('').slice(-2).join('') - 1)
    bestResult.innerText = 'Best Result: ' + points.innerText.split('').slice(-2).join('')
  }
}
atFirst.addEventListener('click', startNewGame)
checkOut.addEventListener('click', checkNumber)
