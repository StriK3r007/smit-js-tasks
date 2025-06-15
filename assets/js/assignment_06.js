// task_01 | Create an array of 3 student names and add one more using push().
function task01() {
    let studentsNames = ["Inam", "Kifayat", "Ilham"]
    let studentName = document.querySelector("#studentName").value
    studentsNames.push(studentName)
    let studentNamesOutput = document.querySelector("#studentNamesOutput").innerHTML = studentsNames
}

// task_02 | Remove the last item from an array of fruits using pop().
function task02() {
    let fruits = ["Apple", "Orange", "Mango", "Banana"]
    console.log(`Array: ${fruits}`)
    let fruitsUpdated = fruits.pop()
    console.log(`Updated Array: ${fruits}`)
    let fruitsUpdatedOutput = document.querySelector("#fruitsUpdatedOutput").innerHTML = fruits
}

// task_03 | Add "Monday" to the beginning of a days array using unshift().
function task03() {
    console.info("Task 03")
    let days = ["Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"]
    console.log(`Array: ${days}`)
    let daysUpdated = days.unshift("Monday")
    console.log(`Updated Array: ${days}`)
    let daysUpdatedOutput = document.querySelector("#daysUpdatedOutput").innerHTML = days
}

// task_04 | Remove the first item from an array of colors using shift().
function task04() {
    console.info("Task 04")
    let colors = ["Red", "Green", "Blue", "Yellow", "Black", "Cyan"]
    console.log(`Array: ${colors}`)
    let colorsUpdated = colors.shift()
    console.log(`Updated Array: ${colors}`)
    let colorsUpdatedOutput = document.querySelector("#colorsUpdatedOutput").innerHTML = colors
}

// task_05 | Use splice() to insert "Math" and "Science" at index 2 of a subjects array.
function task05() {
    console.info("Task 05")
    let subjects = ["Urdu", "English", "Computer", "History", "Geography", "Arts"]
    console.log(`Array: ${subjects}`)
    let subjectsUpdated = subjects.splice(2, 1, "Math", "Science")
    console.log(`Updated Array: ${subjects}`)
    let subjectsUpdatedOutput = document.querySelector("#subjectsUpdatedOutput").innerHTML = subjects
}

// task_06 | Use splice() to remove 2 elements starting from index 1 of a cities array.
function task06() {
    console.info("Task 06")
    let cities = ["Quetta", "Karachi", "Islamabad", "Lahore", "Peshawar"]
    console.log(`Array: ${cities}`)
    let citiesUpdated = cities.splice(0, 2)
    console.log(`Updated Array: ${cities}`)
    let citiesUpdatedOutput = document.querySelector("#citiesUpdatedOutput").innerHTML = cities
}

// task_07 | Use slice() to get the first 3 items from a countries array.
function task07() {
    console.info("Task 07")
    let countries = ["Pakistan", "Iran", "Afghanistan", "China", "Russia", "India"]
    console.log(`Array: ${countries}`)
    let countriesUpdated = countries.slice(0, 3)
    console.log(`Updated Array: ${countriesUpdated}`)
    let countriesUpdatedOutput = document.querySelector("#countriesUpdatedOutput").innerHTML = countriesUpdated
}

// task_08 | Convert the string "apple,banana,mango" into an array using split().