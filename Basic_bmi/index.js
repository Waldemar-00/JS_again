const btn = document.querySelector('.bmiForm .btn')
btn.addEventListener('click', (e) => createBmiField(e))
function calcBmi() {
  const height = document.querySelector('.bmiForm .height').value
  const weight = document.querySelector('.bmiForm .weight').value
  const bmi = weight / Math.pow(height / 100, 2)
  return bmi
}

function createBmiField(e) {
  e.preventDefault()
  const bmi = calcBmi().toFixed(2)
  const bmiResult = bmi >= 25 ? `${bmi} over weight!!!` : `${bmi} normal weight`
  const div = document.createElement('div')
  div.classList.add('indexBmi')
  div.textContent = bmiResult
  document.querySelector('.bmiForm').append(div)
}
