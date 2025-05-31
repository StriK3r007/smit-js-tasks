// task_01 | Ask the user for their age. If the age is 18 or more, show an alert: "You are an adult.", else show: "You are a minor."
let userAge = prompt("Enter your age:")
if (userAge >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// tasl_02 | Ask the user to enter a number. If it's positive, log: "Positive number"; else log: "Not positive".
let num1 = Number(prompt("Enter a number to check if it is positive or not"))
if (num1 >= 0) {
    console.log("Positive Number")
} else {
    console.log("Not Positive")
}

// task_03 | Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd number".
let num2 = Number(prompt("Enter a number to check if it is even or odd"))
if (num2 % 2 === 0) {
    console.log("Even Number")
} else {
    console.log("Odd Number")
}

// task_04 | Ask for a username. If the username is "admin", display "Welcome, admin!"; else display "Access denied."
let userName = prompt("Enter user name")
if (userName === 'admin') {
    console.log(`Welcome ${userName}`)
} else {
    console.log("Access denied")
}

// task_05 | Ask for two numbers. If they are equal, log "Both numbers are the same"; otherwise, log "The numbers are different".
let num3 = Number(prompt("Enter first number"))
let num4 = Number(prompt("Enter second number"))
if (num3 === num4) {
    console.log("Both numbers are the same")
} else {
    console.log("The numbers are different")
}

// task_06 | Ask the user to enter two numbers. Check which one is larger and alert: "First is larger" or "Second is larger".
let num5 = Number(prompt("Enter first number"))
let num6 = Number(prompt("Enter second number"))
if (num5 >= num6) {
    console.log("First number is larger")
} else if (num6 >= num5) {
    console.log("Second number is larger")
} else {
    console.log("Both are same")
}

// task_07 | Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within range".
let num7 = Number(prompt("Enter a number"))
if (num7 > 100) {
    console.log("Too big!")
} else {
    console.log("Within range")
}

// task_08 | Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."
let score = Number(prompt("Enter score"))
if (score >= 50) {
    console.log("You Passed!")
} else {
    console.log("You Failed")
}

// task_09 | Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's not hot."
let temperature = prompt("Enter a temperature value")
if (temperature > 30) {
    console.log("It's hot!")
} else {
    console.log("It's not hot")
}

// task_10 | Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".
let num8 = Number(prompt("Enter a number to check if it is zero or not"))
if (num8 === 0) {
    console.log("Zero!")
} else {
    console.log("Not Zero")
}

// task_11 | Ask the user for their age. If it's 60 or more, log "You are a senior citizen.", else log "You are not a senior."
let user_Age = prompt("Enter your age")
if (user_Age >= 60) {
    console.log("You are a senior citizen")
} else {
    console.log("You are not a senior")
}

// task_12 | Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert "You're not Alice!"
let userAlice = prompt("Enter username")
if (userAlice === 'Alice' || 'alice') {
    console.log("Hi, Alice!")
} else {
    console.log("You're not Alice!")
}

// task_13 | Ask the user for a password. If it matches "12345", log "Correct password"; else log "Wrong password".
let userPassword = prompt("Enter a password")
if (userPassword == '12345') {
    console.log("Correct Password")
} else {
    console.log("Wrong Password")
}

// task_14 | Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!"; else alert "Good afternoon!"
let currentHour = prompt("Enter current hour (0-23)")
if (currentHour > 12) {
    console.log("Good Morning!")
} else {
    console.log("Good Afternoon!")
}

// task_15 | Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log "Not divisible by 5".
let divByFive = Number(prompt("Enter a number to check if it divisible by 5 or not"))
if (divByFive % 5 === 0 ) {
    console.log(`The number ${divByFive} is divisible by 5`)
} else {
    console.log(`The number ${divByFive} is not divisible by 5`)
}

// task_16 | Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's play!"; else alert "Maybe next time!"
let gameChoice = prompt("Do you want to play a game (yes/no)")
if (gameChoice === 'yes') {
    console.log("Let's Play!")
} else {
    console.log("May be next time!")
}

// task_17 | Ask the user for a color. If the color is "blue", log "Cool choice!"; else log "Interesting color!"
let colorChoice = prompt("Enter any one color of your choice")
if (colorChoice === 'blue') {
    console.log("Cool Choice!")
} else {
    console.log("Interesting color!")
}

// task_18 | Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".
let weekEnd = prompt("Enter day of the week")
if (weekEnd === 'Sunday' || 'sunday') {
    console.log("Weekend!")
} else {
    console.log("Weekday")
}

// task_19 | Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!"; else alert "Sorry, out of stock."
let fruitChoice = prompt("Enter a fruit name")
if (fruitChoice === 'banana' || 'apple') {
    console.log("We have that!")
} else {
    console.log("Sorry, out of stock")
}

// task_20 | Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert "Waiting for input..."
let gameOption = prompt("Type start to start the game")
if (gameOption === 'start') {
    alert("Game started!")
} else {
    alert("Waiting for input...")
}