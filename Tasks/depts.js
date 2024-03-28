'Sales Departments Task There are two sales departments - Dept 1 and Dept 2. You need to estimate quarter sales. To do this, you need to calculate the average sales per month in quarter for each department. 1. Create an arrow function getAverage to calculate the average sales per month in quarter. 2. Use the getAverage function to calculate the average for each department. 3.	Create a function printBonus that takes the average sales of each department as parameters: printBonus(dept1AverSales, dept2AverSales). If sales of one department  are at least 30% higher than sales of another one, the function should calculate a bonus for the winner in percentage of that difference and log this to the console. For instance, if Dept 1 has 35% more sales, the function should log the following to the console: ‘Dept 1 will get a bonus of 35%’.4.	Use the printBonus function with two data sets below.'

const dept1 = [35467, 29842, 38501]
const dept2 = [70533, 50121, 33899]

// const dept1 = [50301, 21984, 19207]
// const dept2 = [72381, 41562, 29465]
function getSum(array) {
  return array.reduce((acc, value) => acc + value, 0)
}
function calcBonus(array1, array2) {
  const firstSum = getSum(array1)
  const secondSum = getSum(array2)
  const percent = Math.round(
    firstSum <= secondSum ? secondSum / (firstSum / 100) - 100 : firstSum / (secondSum / 100) - 100,
  )
  const message =
    percent > 30 && firstSum > secondSum
      ? `First dept will take bonus ${percent}`
      : `Second dept will take bonus ${percent}`
  console.log(message)
}
calcBonus(dept1, dept2)
