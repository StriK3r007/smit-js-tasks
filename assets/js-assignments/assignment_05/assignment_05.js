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

// task_06 | Select a button with class "submit-btn" and log "Button Clicked" to the console when it's clicked.
function submitButton(){
    console.log("Button Clicked!")
    let result = document.getElementById("outputSubmitButton")
    result.innerText = "Button Clicked!"
}

// task_07 | Get values from two inputs with ids "first" and "second", add them (as numbers), and show the result in a span with id "sum".
function sumTwoValues(){
    let num1 = document.getElementById("value1").value
    let num2 = document.getElementById("value2").value
    let result = document.getElementById("sumTwoValuesOutput")
    result.innerText = Number(num1) + Number(num2)
}

// task_08 | Change the text of a paragraph with class "description" to "Updated successfully".
function descriptionUpdate(){
    console.log("Updated successfully!")
    let result = document.getElementById("descriptionUpdate")
    result.innerText = "Updated successfully!"
}

// task_09 | Select a div with id "box" and set its width to 200px and background color to green.
function updateWidth(){
    let containerBg = document.getElementById("containerWidth")
    containerBg.classList.add("bg-green-500")
    containerBg.style.width = "200px"
}

// task_10 | Get the email entered in an input with id "email" and print it in the console.
function getEmail(){
    let input = document.getElementById("email").value
    let result = document.getElementById("outputEmail")
    if (input === '') {
        input = "Enter a valid email address."
    }
    result.innerText = input
    console.log(input)
}

// task_11 | Select a paragraph and update its font size to 24px.
function changeParagraphFontSize() {
    let paragraph = document.getElementById("changeParagraphFontSize")
    paragraph.classList.add("text-red-500")
    paragraph.classList.add("text-3xl")
}

// task_12 | On button click, get a name from input "fullName" and set the text "Hello, [name]" inside a div "greeting".
function getFullName() {
    let userName = document.getElementById("userName").value
    let result = document.getElementById("outputFullName")
    if (userName === '') {
        userName = "Please enter your name."
        result.innerHTML = userName
    }else {
        result.innerHTML = (`Hello, ${userName}`)
    }
}

// task_13 | Select an image with id "profilePic" and change its src to another image URL.
function changeImageSource() {
    let result = document.getElementById("changeImageSourceOutput")
    let imageSource = document.getElementById("imageSource").value
    if (imageSource === '') {
        imageSource = "Please enter image source."
        result.innerHTML = imageSource
        console.log("Image source not found")
    }else {
        document.getElementById("profilePic").src = imageSource
    }
}