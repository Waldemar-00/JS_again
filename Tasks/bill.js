'use strict'
// 'Tips Calculator Task You have to build a tips calculator. The calculator should calculate tips in following manner: If the bill value is less than 20, tips should be 20%. In other cases tips should be 15%. 1. Create an arrow function calculateTips (), that takes a bill parameter and returns the corresponding tips. 2.	Create an array of bills with test data below. 3.	Create an array of tips for each bill. 4.	Create an array of total bills, that is bill + tips. Test data: 11, 20, 47.'

const calculateTips = (array) => array.map((bill) => (bill < 20 ? bill * 0.2 : bill * 0.15))
const calcFullBill = (array) => array.map((bill) => (bill < 20 ? bill + bill * 0.2 : bill + bill * 0.15))
console.log(calculateTips([11, 20, 47]))
console.log(calcFullBill([11, 20, 47]))
