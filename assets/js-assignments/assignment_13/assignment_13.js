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
    if(btn_02) {
        btn_02.innerText = "Light"
        taskContainer.classList.replace("bg-gray-100", "bg-gray-700")
        taskHeading.classList.replace("text-gray-900", "text-white")
        console.log("Dark-Mode")
        btn_02 = false
    }
    else {
        btn_02.innerText = "Dark"
        taskContainer.classList.replace("bg-gray-700", "bg-gray-100")
        taskHeading.classList.replace("text-white", "text-gray-900")
        console.log("Light-Mode")
        btn_02 = true
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
const task_07 = () => {
    const task07Output = document.getElementById("task_07_output")
    text = password.value
    if(text.length >= 8) {
        task07Output.classList.add("text-green-500")
        task07Output.classList.remove("text-red-500")
        task07Output.innerText = "Strong Password"
        return
    }
    task07Output.classList.add("text-red-500")
    task07Output.classList.remove("text-green-500")
    task07Output.innerText = "Weak Password"
}
password.addEventListener("input", task_07)