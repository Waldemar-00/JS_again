const btn = document.querySelector('.bmiForm .btn')
btn.addEventListener('click', createBmiField)
function calcBmi() {
  const height = document.querySelector('.bmiForm .height').value
  const weight = document.querySelector('.bmiForm .weight').value
  const bmi = weight / (height * height)
  return bmi
}

function createBmiField() {
  const bmi = calcBmi().toFixed(2)
  const bmiResult = bmi > 25 ? `${bmi} over weight!!!` : `${bmi} normal weight`
  const div = document.createElement('div')
  div.classList.add('indexBmi')
  div.textContent = bmiResult
  document.querySelector('.bmiForm').append(div)
}
