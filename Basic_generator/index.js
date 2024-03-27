import { aphorismsArray } from './data.js'
putAphorismToPage(aphorismsArray[Math.floor(Math.random() * 16)])
function getNewAphorism(array) {
  let index = 0
  return {
    next: function () {
      if (index < array.length) return array[index++]
      else {
        index = 0
        return array[index++]
      }
    },
  }
}
const aphorism = getNewAphorism(aphorismsArray)
function putAphorismToPage(string) {
  const p = document.querySelector('.wrapper .aphorism')
  p.innerText = string
}
const btn = document.querySelector('.wrapper .btn')
btn.addEventListener('click', () => putAphorismToPage(aphorism.next()))
