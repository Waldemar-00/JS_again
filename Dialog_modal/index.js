const btnGet = document.querySelector('.get')
const btnClose = document.querySelector('.close')
const inputName = document.querySelector('[name="name"]')
const inputSourname = document.querySelector('[name="sourname"]')
const inputAge = document.querySelector('[name="age"]')
const form = document.querySelector('.modalForm')
const btnForm = document.querySelector('.modalForm button')
const dialog = document.querySelector('.modal')

btnGet.addEventListener('click', () => dialog.showModal())
btnClose.addEventListener('click', () => dialog.close())
form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: inputName.value, sourname: inputSourname.value, age: inputAge.value }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
})
