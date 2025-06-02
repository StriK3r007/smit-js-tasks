// task_01 | Select a paragraph with id "message" and change its text to "Welcome!".
function changeParagraph() {
    let paragraph = document.getElementById("message")
    paragraph.innerHTML = "Welcome!"
}

// task_02 | Get the value from an input with id "nameInput" and display it inside a div with id "result".
function inputValue(){
    let input = document.getElementById("inputValue").value
    let result = document.getElementById("result")
    result.innerText = input
}

// task_03 | When a button is clicked, change the background color of a section with id "container" to light blue.
function changeBackground() {
    let containerBg = document.getElementById("container")
    containerBg.classList.add("bg-blue-300")
}

// task_04 | Select a heading (h1) with id "mainTitle" and change its color to red.
function changeH1Color() {
    let h1Color = document.getElementById("changeCol")
    h1Color.classList.add("text-red-500")
}

// task_05 | Get the number from an input with id "num1" and show it inside a paragraph with id "output".
function showInputNum(){
    let input = document.getElementById("num1").value
    let result = document.getElementById("output")
    result.innerText = input
}

// task_05 | Select a button with class "submit-btn" and log "Button Clicked" to the console when it's clicked.