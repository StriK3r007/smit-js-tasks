// Note use console see the output.
// alert("Note: use console see the output.")

// task_01:
const btn_01 = document.getElementById("task_01_btn")
let btn_02 = document.getElementById("task_02_btn")
const btn_03 = document.getElementById("task_03_btn")

const body = document.getElementById("body")

const task_01 = () => {
    const randomColor ="#" + Math.floor(Math.random() * 16777215).toString(16)
    console.log(randomColor)
    body.style.backgroundColor = randomColor
    btn_01.innerText = randomColor
}
btn_01.addEventListener("click", task_01)

// task_02: 
const taskContainer = document.getElementById("task-container")
const taskHeading = document.getElementById("task-heading")

const task_02 = () => {
    if (taskContainer.classList.contains("bg-gray-100")) {
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
const task_03 = () => {
    console.clear()
    console.log("Task - 03")
}
btn_03.addEventListener("click", (event) => {
    task_03()
    btn_03.style.display = 'none'

})

// task_04:
const incBtn = document.getElementById("inc-btn")
const decBtn = document.getElementById("dec-btn")

let inputValue = document.getElementById("num-value")
let numValue = Number(inputValue.value)


incBtn.addEventListener("click", () => {
    (inputValue.value = (numValue += 1))
    if (numValue > 0) {
        decBtn.disabled = false
        decBtn.classList.remove("opacity-50")
        decBtn.classList.replace("cursor-not-allowed", "cursor-pointer")
        return
    }
})
decBtn.addEventListener("click", () => {
    inputValue.value = (numValue -= 1)
    if (numValue === 0) {
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
const regex = {
    veryWeak: /^.{0,5}$/,
    weak: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
}
const task_07 = () => {
    const task07Output = document.getElementById("task_07_output")
    text = password.value
    if (regex.veryWeak.test(password.value)) {
        task07Output.innerHTML = "Your password is very weak! Use more than 5 characters and add variety."
        task07Output.classList.add("text-red-500")
    }
    if (regex.weak.test(password.value)) {
        task07Output.innerHTML = "Your password is weak. Try adding uppercase letters, numbers, and special characters."
        task07Output.classList.add("text-red-500")
    }
    if (regex.strong.test(password.value)) {
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
    if (regex.veryWeak.test(formPassword.value)) {
        task08Output.innerHTML = "Your password is very weak! Use more than 5 characters and add variety."
        task08Output.classList.add("text-red-500")
    }
    if (regex.weak.test(formPassword.value)) {
        task08Output.innerHTML = "Your password is weak. Try adding uppercase letters, numbers, and special characters."
        task08Output.classList.add("text-red-500")
    }
    if (regex.strong.test(formPassword.value)) {
        task08Output.innerHTML = "Your password is strong!, Login Successful"
        task08Output.classList.remove("text-red-500")
        task08Output.classList.add("text-green-500")
        console.log(formEmail.value)
        console.log(formPassword.value)
    }
    event.preventDefault();
}
formSubmit.addEventListener("click", task_08)

// task_09
const task09Output = document.getElementById("task_09_output")
const task09Text = document.getElementById("text-to-uppercase")
task09Text.addEventListener("input", () => {
    task09Output.innerText = task09Text.value.toUpperCase()
})

// task_10
const task10Output = document.getElementById("task_10_output")
const task10Text = document.getElementById("task-10-text")
const bannedWords = ["spam", "test"]
task10Text.addEventListener("input", () => {
    if (task10Text.value.includes(bannedWords[0])) {
        task10Output.innerText = "Banned words like ('spam', 'test') are not allowed"
        return
    }
    task10Output.innerText = task10Text.value
})

// task_11
// const countries = ["Pakistan", "Afghanistan", "India"]
const countriesList = document.getElementById("countries-list")
const citiesList = document.getElementById("cities-list")

const countries = [
    { name: "Pakistan", cities: "Islamabad, Quetta, Karachi, Lahore, KPK" },
    { name: "Afghanistan", cities: "Kandahar, Kabul, Bamyan" },
    { name: "India", cities: "Delhi, Mumbai, Kolkata, Indor" }
]

countries.forEach(item => {
    const option = document.createElement('option')
    option.innerText = item.name
    option.value = item.name
    countriesList.appendChild(option)
})

countriesList.addEventListener("input", () => {
    citiesList.innerHTML = ''

    if (countriesList.value === "") {
        citiesList.disabled = true
        citiesList.classList.add("opacity-50", "cursor-not-allowed")
        return
    }
    
    countries.forEach(item => {
        if (countriesList.value === item.name) {
            citiesList.disabled = false
            citiesList.classList.remove("opacity-50", "cursor-not-allowed")
            const cityList = item.cities.split(",")

            cityList.forEach(item => {
                option = document.createElement('option')
                option.innerText = item
                citiesList.appendChild(option)
            })
        }
    })
})


// ! ChatGpt Method:
/* 
const countriesList = document.getElementById("countries-list")
const citiesList = document.getElementById("cities-list")

const countries = [
    { name: "Pakistan", cities: "Islamabad, Quetta, Karachi, Lahore, KPK" },
    { name: "Afghanistan", cities: "Kandahar, Kabul, Bamyan" },
    { name: "India", cities: "Delhi, Mumbai, Kolkata, Indore" }
]

// Populate countries list on page load
countries.forEach(item => {
    const option = document.createElement('option')
    option.innerText = item.name
    option.value = item.name
    countriesList.appendChild(option)
})

countriesList.addEventListener("input", () => {
    // Clear existing cities
    citiesList.innerHTML = ''

    const selectedCountry = countriesList.value;
    
    // Handle the case where no country is selected
    if (selectedCountry === "") {
        citiesList.disabled = true
        citiesList.classList.add("opacity-50", "cursor-not-allowed");
        return;
    }

    // Find the selected country in the list
    const country = countries.find(item => item.name === selectedCountry);

    // If a country is found
    if (country) {
        citiesList.disabled = false
        citiesList.classList.remove("opacity-50", "cursor-not-allowed");
        
        // Create city options for the selected country
        const cityList = country.cities.split(", ");
        cityList.forEach(city => {
            const option = document.createElement('option')
            option.innerText = city
            citiesList.appendChild(option)
        })
    }
});
*/ 

// task_12


// task_13 
const passwordToShow = document.getElementById("task-13-password")
const showHideBtn = document.getElementById("show-hide-password")

showHideBtn.addEventListener("click", () => {
    if(passwordToShow.type === "password") {
        passwordToShow.type = "text"
        showHideBtn.value = "Hide"
    }
    else {
        passwordToShow.type = "password"
        showHideBtn.value = "Show"

    }
})


// task_14
const taskColorPickerBody = document.getElementById("task-color-picker-body")
const colorPicker = document.getElementById("color-picker")
const checkBox = document.getElementById("check-box")

colorPicker.addEventListener("input", () => {
    if(checkBox.checked) {
        taskColorPickerBody.style.backgroundColor = colorPicker.value
        taskColorPickerBody.classList.remove("bg-gray-100")
    }
})