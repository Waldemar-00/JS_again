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
//! FETCH
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: inputName.value, sourname: inputSourname.value, age: inputAge.value }),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result))
// })
//! AXIOS

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   axios({
//     url: 'http://localhost:3000/users',
//     method: 'POST',
//     data: { name: inputName.value, sourname: inputSourname.value, age: inputAge.value },
//   }).then((response) => console.log(response.data))
// })

//! AXIOS ASYNC AWAIT TRY-CATCH
axios.interceptors.request.use((config) => {
  alert('Request has sent!')
  return config
})
async function userDataPost(e) {
  e.preventDefault()
  try {
    const user = await axios({
      url: 'http://localhost:3000/user',
      method: 'POST',
      timeout: 30000,
      data: { name: inputName.value, sourname: inputSourname.value, age: inputAge.value },
    })
    if (!user.data.name) throw new Error('User must have name!')
    if (!user.data.sourname) throw new Error('User must have sourname!')
    if (!user.data.age) throw new Error('User must have age!')
  } catch (error) {
    if (
      error.message === 'User must have name!' ||
      error.message === 'User must have sourname!' ||
      error.message === 'User must have age!'
    )
      console.error(error.message)
    else if (error.response) {
      console.error(error.response.data, error.response)
    } else if (error.request) {
      console.error(error.request)
    } else {
      throw error
    }
  }
}
form.addEventListener('submit', (e) => userDataPost(e))
