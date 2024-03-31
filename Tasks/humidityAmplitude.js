const humidity = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49]
function getHumidityAmplitude(humidity) {
  const filterHumidity = humidity.filter((item) => {
    const num = Number(item)
    return num === num
  })
  return Math.max(...filterHumidity) - Math.min(...filterHumidity)
}
console.log(getHumidityAmplitude(humidity))
