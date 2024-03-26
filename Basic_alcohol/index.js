const wrapperBtn = document.querySelector('.wrapper .btn')
wrapperBtn.addEventListener('click', checkAge)
function checkAge() {
  const prevP = document.querySelector('.wrapper p')
  if (prevP) prevP.remove()
  const age = document.querySelector('.wrapper .adult').value
  const message = age >= 18 ? 'You can buy any alcohol' : `You can NOT buy any alcohol. You are too young!`
  const wrapper = document.querySelector('.wrapper')
  const p = document.createElement('p')
  p.classList.add('paragraph')
  p.innerText = message
  wrapper.append(p)
}
