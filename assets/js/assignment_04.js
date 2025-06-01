// task_01 | addTwoNumbers 
// Write a function that takes two numbers and returns their sum.
function addTwoNumbers() {
    let num1 = document.getElementById("sumNum1").value
    let num2 = document.getElementById("sumNum2").value
    let output = document.getElementById("sumOutput")
    let sum = Number(num1) + Number(num2)
    output.innerText = sum
}

// task_02 | subtractNumbers 
// Create a function that takes two numbers and returns the result of the first number minus the second.
function subtractNumbers() {
    let num1 = document.getElementById("subNum1").value
    let num2 = document.getElementById("subNum2").value
    let output = document.getElementById("subOutput")
    let subtract = Number(num1) - Number(num2)
    output.innerText = subtract
}

// task_03 | multiplyNumbers 
// Write a function that multiplies two numbers and returns the result.
function multiplyNumbers() {
    let num1 = document.getElementById("mulNum1").value
    let num2 = document.getElementById("mulNum2").value
    let output = document.getElementById("mulOutput")
    let multiple = Number(num1) * Number(num2)
    output.innerText = multiple
}

// task_04 | divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by the second.
function divideNumbers() {
    let num1 = document.getElementById("divNum1").value
    let num2 = document.getElementById("divNum2").value
    let output = document.getElementById("divOutput")
    let divided = Number(num1) / Number(num2)
    output.innerText = divided.toPrecision(2)
}

// task_05 | getRemainder 
// Write a function that takes two numbers and returns the remainder when the first number is divided by the second.
function getRemainder() {
    let num1 = document.getElementById("remNum1").value
    let num2 = document.getElementById("remNum2").value
    let output = document.getElementById("remOutput")
    let remainder = Number(num1) % Number(num2)
    output.innerText = remainder
}

// task_06 | isPositive
// Write a function that checks if a number is positive. If it is, return "Positive", otherwise return "Not Positive".
function isPositive() {
    let num = document.getElementById("posNum").value
    let output = document.getElementById("posOutput")
    if (num > 0) {
        output.innerText = "Positive"
    } else if (num < 0) {
        output.innerText = "Not Positive"
    } else {
        output.innerText = "Zero"
    }
}

// task_07 | isNegative
// Create a function that checks if a number is negative. If it is, return "Negative", else return "Not Negative".
function isNegative() {
    let num = document.getElementById("negNum").value
    let output = document.getElementById("negOutput")
    if (num < 0) {
        output.innerText = "Negative"
    } else if (num > 0) {
        output.innerText = "Not Negative"
    } else {
        output.innerText = "Zero"
    }
}

// task_08 | checkEven 
// Write a function that takes a number and returns "Even" if the number is even, otherwise "Odd".
function checkEven() {
    let num = document.getElementById("evenNum").value
    let output = document.getElementById("evenOutput")
    if (num % 2 === 0) {
        output.innerText = "Even"
    } else {
        output.innerText = "Odd"
    }
}

// task_09 | isEqual 
// Write a function that takes two numbers and returns "Equal" if they are the same, otherwise "Not Equal".
function isEqual() {
    let num = document.getElementById("equalNum").value
    let output = document.getElementById("equalOutput")
    if (num == 0) {
        output.innerText = "Equal"
    } else {
        output.innerText = "Not Equal"
    }
}

// task_10 | compareNumbers 
// Create a function that returns "Greater" if the first number is greater than the second, else return "Smaller".
function compareNumbers() {
    let num1 = document.getElementById("compareNum1").value
    let num2 = document.getElementById("compareNum2").value
    let output = document.getElementById("compareOutput")
    if (num1 > num2) {
        output.innerText = "Greater"
    } else if (num1 < num2) {
        output.innerText = "Smaller"
    } 
    else {
        output.innerText = "Both are Equal"
    }
}

// task_11 | getFullName 
// Write a function that takes a first name and last name, and returns the full name.
function getFullName() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let output = document.getElementById("fullNameOutput")
    output.innerText = (`${firstName} ${lastName}`)
}

// task_12 | getGrade
// Create a function that takes a number (0–100) and returns:
// "Pass" if the score is 40 or more
// "Fail" if it is less than 40
function getGrade() {
    let oMarks = document.getElementById("obtainMarks").value
    let output = document.getElementById("obtainMarksOutput")
    if (oMarks >= 40 ) {
        output.innerText = "Pass"
    } else {
        output.innerText = "Fail"
    }
}

// task_13 | isTeenager
// Write a function that takes an age and returns "Teenager" if the age is between 13 and 19, otherwise return "Not a Teenager".
function isTeenager() {
    let age = document.getElementById("age").value
    let output = document.getElementById("isTeenagerOutput")
    if (age >= 13 && age <= 19 ) {
        output.innerText = "Teenager"
    } else {
        output.innerText = "Not a Teenager"
    }
}

// task_14 | greetUser 
// Write a function that takes a name and returns a greeting like "Hello, Ahmed!".
function greetUser() {
    let userName = document.getElementById("greetUserName").value
    let output = document.getElementById("greetUserOutput")
    output.innerText = (`Hello, ${userName}!`)
}

// task_15 | isEligibleToVote
// Create a function that takes age and returns "Eligible" if age is 18 or above, otherwise "Not Eligible".
function isEligibleToVote() {
    let ageEligibility = document.getElementById("eligibility").value
    let output = document.getElementById("isEligibleToVoteOutput")
    if (ageEligibility >= 18 ) {
        output.innerText = "Eligible"
    } else {
        output.innerText = "Not Eligible"
    }
}

// task_16 | findAbsoluteValue
// Write a function that returns the absolute value of a number (no Math.abs, use if-else only).
function findAbsoluteValue() {
    let num = document.getElementById("absoluteValue").value
    let output = document.getElementById("absoluteValueOutput")
    if (num < 0 ) {
        output.innerText = (`Absolute value of ${num} is ${-num}`)
    } else {
        output.innerText = (`Absolute value of ${num} is ${num}`)
    }
}

// task_17 | checkTemperature
// Write a function that takes a temperature and returns:
// "Hot" if temperature is above 30
// "Cold" if below 10
// "Normal" otherwise
function checkTemperature() {
    let temperature = document.getElementById("temperature").value
    let output = document.getElementById("temperatureOutput")
    if (temperature > 30 ) {
        output.innerText = "Hot"
    } else if (temperature < 10){
        output.innerText = "Cold"
    } else {
        output.innerText = "Normal"
    }
}

// task_18 | getTriangleType
// Create a function that takes 3 sides and returns:
// "Equilateral" if all are equal
// "Isosceles" if any two are equal
// "Scalene" if all are different
function getTriangleType() {
    let triangleSide1 = document.getElementById("triangleSide1").value
    let triangleSide2 = document.getElementById("triangleSide2").value
    let triangleSide3 = document.getElementById("triangleSide3").value
    let output = document.getElementById("triangleTypeOutput")
    if (triangleSide1 === triangleSide2 && triangleSide1 === triangleSide3 && triangleSide2 === triangleSide3) {
        output.innerText = "Equilateral"
    } else if (triangleSide1 === triangleSide2 || triangleSide1 === triangleSide3 || triangleSide2 === triangleSide3){
        output.innerText = "Isosceles"
    } else {
        output.innerText = "Scalene"
    }
}

// task_19 | calculateDiscountedPrice
// Write a function that takes a price and discount percentage, and returns the discounted price.
function calculateDiscountedPrice() {
    let price = document.getElementById("price").value
    let percentage = document.getElementById("percentage").value
    let output = document.getElementById("discountedPriceOutput")
    output.innerText = (`Discounted Price: ${price / 100 * percentage}`)
}

// task_20 | isPasswordValid
// Write a function that takes a password and checks if its length is 8 characters or more. Return "Valid Password" or "Too Short".
function isPasswordValid() {
    let password = document.getElementById("password").value
    let output = document.getElementById("passwordValidOutput")
    if (password.length >= 8) {
        output.innerText = "Valid Password"
    } else {
        output.innerText = "Too short"
    }
}