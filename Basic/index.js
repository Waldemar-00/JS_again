function submitForm(e) {
  e.preventDefault()
  const name = document.querySelector('.questions .name').value
  const sourname = document.querySelector('.questions .sourname').value
  const tel = document.querySelector('.questions .telephone').value
  const form = document.querySelector('.questions')
  if (name && sourname && tel) {
    form.remove()
    return {
      name,
      sourname,
      tel,
    }
  } else form.reset()
}
function createForm() {
  const form = document.createElement('form')
  form.classList.add('questions')
  form.innerHTML = `
  <input class='name' placeholder='your name' name='name' type='text'/>
  <input class='sourname' placeholder= 'your sourname' name='sourname' type='text'/>
  <input class='telephone' placeholder= 'your phone number' name='telephone' type='tel'/>
  <button type='submit' class='btn'>Submit form</button>
`
  const body = document.querySelector('body')
  body.append(form)
  const btn = document.querySelector('.questions .btn')
  btn.addEventListener('click', (e) => console.log(submitForm(e)))
}
window.addEventListener('load', createForm)
