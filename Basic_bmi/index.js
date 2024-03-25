const btn = document.querySelector('.bmiForm .btn')
btn.addEventListener('click', (e) => createBmiField(e))
function calcBmi() {
  const height = document.querySelector('.bmiForm .height').value
  const weight = document.querySelector('.bmiForm .weight').value
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2)
  const overBmi = bmi - 25
  const overWeight = overBmi > 0 ? Math.round(overBmi * Math.pow(height / 100, 2)) : ''
  return { bmi, overWeight }
}

function createBmiField(e) {
  e.preventDefault()
  const { bmi, overWeight } = calcBmi()
  const bmiResult =
    bmi >= 25
      ? `<p>Your BMI is ${bmi}.</p> <p>Your overweight is near ${overWeight}!!!</p>`
      : `${bmi} Your weight is normal!`
  const div = document.createElement('div')
  div.classList.add('indexBmi')
  div.innerHTML = bmiResult
  document.querySelector('.bmiForm').append(div)
}
