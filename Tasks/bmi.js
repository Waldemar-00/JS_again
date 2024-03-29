// "Let's go back to the BMI index! This time, we'll use objects to do the calculations! BMI = weight / height ** 2 = weight / (height * height) (weight in kg and height in meters) Your task: We have two friends - Jack and Mike 1. For each of them, create an object with properties of its first name, last name, weight and height (Jack White and Mike Black). 2. Create a BMI calculation method for each object to calculate BMI (same method for both objects). Store the BMI value in a property and also return it from the method. 3. Log into the console who has the higher BMI, also the full name and the corresponding BMI. Example: 'Jack White BMI (25.7) is higher than Mike Black (22.4)!'Test Data: Jack weight 79 kg, height 1.70 m. Mike weighs 91 kg and his height is 1.93 m. Happy coding!"

const userJack = ['Jack', 91, 1.93]
const userMike = ['Mike', 79, 1.7]
function User([name, weight, height]) {
  this.name = name
  this.weight = weight
  this.height = height
  this.calcBmi = function () {
    this.userBmi = Math.round(this.weight / this.height ** 2)
    return this.userBmi
  }
  return this
}
const userMikeObj = new User(userMike)
const userJackObj = new User(userJack)
userMikeObj.calcBmi()
userJackObj.calcBmi()
const resultString = `${userJackObj.userBmi > userMikeObj.userBmi ? userJackObj.name : userMikeObj.name} BMI is ${
  userJackObj.userBmi > userMikeObj.userBmi ? userJackObj.userBmi : userMikeObj.userBmi
} it's ${userJackObj.userBmi === userMikeObj.userBmi ? 'equal' : 'more than'} ${
  userJackObj.userBmi > userMikeObj.userBmi ? userMikeObj.name : userJackObj.name
} BMI - ${userJackObj.userBmi > userMikeObj.userBmi ? userMikeObj.userBmi : userJackObj.userBmi}!`
console.log(resultString)
