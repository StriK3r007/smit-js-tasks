// Note use console see the output.
// alert("Note: use console see the output.")

// task_01:
const btn_01 = document.getElementById("task_01_btn")
let btn_02 = document.getElementById("task_02_btn")
const btn_03 = document.getElementById("task_03_btn")

const body = document.getElementById("body")

const task_01 = () => {
    const randomColor = "#" + Math.floor(Math.random()* 16777215).toString(16) 
    body.style.backgroundColor = randomColor
    btn_01.innerText = randomColor
}
btn_01.addEventListener("click", task_01)

// task_02: 
const taskContainer = document.getElementById("task-container")
const taskHeading = document.getElementById("task-heading")

const task_02 = () => {
    if(taskContainer.classList.contains("bg-gray-100")) {
        taskContainer.classList.replace("bg-gray-100", "bg-gray-700")
        taskHeading.classList.replace("text-gray-900", "text-white")
        console.log("Dark-Mode")
        btn_02.textContent = "Light"
    }
    else {
        taskContainer.classList.replace("bg-gray-700", "bg-gray-100")
        taskHeading.classList.replace("text-white", "text-gray-900")
        btn_02.textContent = "Dark"
        console.log("Light-Mode")   
    }
}
btn_02.addEventListener("click", task_02)

// task_03:

const task03MainContainer = document.getElementById("task-03-main-container")

const task03Container = document.getElementById("task-03-container")
// task03Container.style.display = 'none'
// task-03-container
// task-03-heading
// task-03-subDiv-01
// task-03-subDiv-02
// task-03-subDiv-03
// task-03-output

const task_03 = () => {
    console.clear()
    console.log("Task - 03")
    // task03Container.style.display = 'none'
}
btn_03.addEventListener("click", (event) => {
    task_03()
    btn_03.style.display = 'none'

})
task03Container.addEventListener("click", (event) => {
    // task03Container.style.display = 'none'
})

// task_04:
const incBtn = document.getElementById("inc-btn")
const decBtn = document.getElementById("dec-btn")

let inputValue = document.getElementById("num-value")
let numValue = Number(inputValue.value)


incBtn.addEventListener("click", () => {
    (inputValue.value = (numValue += 1))
    if(numValue > 0) {
        decBtn.disabled = false
        decBtn.classList.remove("opacity-50")
        decBtn.classList.replace("cursor-not-allowed", "cursor-pointer")
        return
    }
})
decBtn.addEventListener("click", () => {
    inputValue.value = (numValue -= 1)
    if(numValue === 0) {
        decBtn.disabled = true
        decBtn.classList.add("opacity-50")
        decBtn.classList.replace("cursor-pointer", "cursor-not-allowed")
        return
    }
    decBtn.disabled = false
    decBtn.classList.remove("opacity-50")
    decBtn.classList.replace("cursor-not-allowed", "cursor-pointer")
})

// task_05:
const btn_05 = document.getElementById("task_05_btn")
const task_05 = () => {
    alert("Button disabled")
    if (btn_05) {
        btn_05.disabled = true
        btn_05.classList.replace("cursor-pointer", "cursor-not-allowed")
        btn_05.classList.add("opacity-50")
    }
}
btn_05.addEventListener("click", task_05)

// task_06:
const string = document.getElementById("task-06-text")
const task_06 = () => {
    const task06Output = document.getElementById("task_06_output")
    text = string.value
    task06Output.innerHTML = `Characters typed: ${text.length}`
}
string.addEventListener("input", task_06)

// task_07:
const password = document.getElementById("task-07-password")
const regix = {
    veryWeak: /^.{0,5}$/,
    weak: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
}
const task_07 = () => {
    const task07Output = document.getElementById("task_07_output")
    text = password.value
    if (regix.veryWeak.test(password.value)){
        task07Output.innerHTML = "Your password is very weak! Use more than 5 characters and add variety."
        task07Output.classList.add("text-red-500")
    }
    if (regix.weak.test(password.value)){
        task07Output.innerHTML = "Your password is weak. Try adding uppercase letters, numbers, and special characters."
        task07Output.classList.add("text-red-500")
    }
    if (regix.strong.test(password.value)){
        task07Output.innerHTML = "Your password is strong!"
        task07Output.classList.remove("text-red-500")
        task07Output.classList.add("text-green-500")
        return
    }
}
password.addEventListener("input", task_07)

// task_08
const taskForm = document.getElementById("task-08-form")
const task08Output = document.getElementById("task_08_output")
const formEmail = document.getElementById("task-08-email")
const formPassword = document.getElementById("task-08-password")
const formSubmit = document.getElementById("task-08-btn")

const task_08 = (event) => {
    if (!formEmail.value || !formPassword.value) {
        // console.log("Please enter your credentials")
        task08Output.innerHTML = "Please enter your credentials"
        task08Output.classList.add("text-red-500")
        return
    }
    if (regix.veryWeak.test(formPassword.value)){
        task08Output.innerHTML = "Your password is very weak! Use more than 5 characters and add variety."
        task08Output.classList.add("text-red-500")
    }
    if (regix.weak.test(formPassword.value)){
        task08Output.innerHTML = "Your password is weak. Try adding uppercase letters, numbers, and special characters."
        task08Output.classList.add("text-red-500")
    }
    if (regix.strong.test(formPassword.value)){
        task08Output.innerHTML = "Your password is strong!, Login Successful"
        task08Output.classList.remove("text-red-500")
        task08Output.classList.add("text-green-500")
        console.log(formEmail.value)
        console.log(formPassword.value)
    }
    event.preventDefault();   
}
formSubmit.addEventListener("click", task_08)