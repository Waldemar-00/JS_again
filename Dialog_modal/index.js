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
dialog.addEventListener('click', (e) => {
  if (e.target.hasAttribute('open')) dialog.close()
})
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

//! AXIOS, ASYNC-AWAIT, TRY-CATCH, axios.interceptors.request.use
axios.interceptors.request.use((request) => {
  request.meta = request.meta || {}
  request.meta.requestStart = new Date().getTime()
  console.log(request.meta.requestStart)
  return request
})
async function userDataPost(e) {
  try {
    e.preventDefault()
    return await axios({
      url: 'http://localhost:3000/users',
      method: 'POST',
      signal: AbortSignal.timeout(0),
      //! AbortSignal.timeout
      data: { name: inputName.value, sourname: inputSourname.value, age: inputAge.value },
    })
  } catch (error) {
    console.log(error)
    if (error.name === 'CanceledError') {
      //! 'CanceledError'
      alert('Timeout: It took more than 0 seconds to get a response!')
    } else if (error.name === 'AbortError') {
      //! Need to know a real error.name!
      alert('Request was aborted by user action!')
    }
  }
}
form.addEventListener('submit', (e) => userDataPost(e))
//! axios.interceptors.use
axios.interceptors.response.use((response) => {
  try {
    response.config.meta.requestEnd = new Date().getTime()
    console.log(response.config.meta.requestEnd)
    response.config.meta.requestTime = response.config.meta.requestEnd - response.config.meta.requestStart
    console.log(response.config.meta.requestTime)
    //! Working when no data
    if (!response.data.name) throw new Error('User must have name!')
    if (!response.data.sourname) throw new Error('User must have sourname!')
    if (!response.data.age) throw new Error('User must have age!')
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
})
