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
    let subtract = Number(num1) * Number(num2)
    output.innerText = subtract
}

// task_04 | divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by the second.
function divideNumbers() {
    let num1 = document.getElementById("divNum1").value
    let num2 = document.getElementById("divNum2").value
    let output = document.getElementById("divOutput")
    let subtract = Number(num1) / Number(num2)
    output.innerText = subtract.toPrecision(2)
}

// task_05 | getRemainder 
// Write a function that takes two numbers and returns the remainder when the first number is divided by the second.
function getRemainder() {
    let num1 = document.getElementById("remNum1").value
    let num2 = document.getElementById("remNum2").value
    let output = document.getElementById("remOutput")
    let subtract = Number(num1) % Number(num2)
    output.innerText = subtract
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