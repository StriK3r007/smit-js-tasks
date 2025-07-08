// task_01 | Create an array of 3 student names and add one more using push().
function task01() {
    console.log("*** Task - 01 ***")
    let fruits = ["apple", "banana", "cherry"]
    let task_01_output = document.querySelector("#task_01_output")
    task_01_output.innerHTML = ''
    for (let i = 0; i < fruits.length; i++) {
        task_01_output.innerHTML += `<br/> ${fruits[i]}`
        console.log(fruits[i])
    }
}

function task02() {
    console.log("*** Task - 02 ***")

    let colors = ["red", "green", "blue"]
    let task_02_output = document.querySelector("#task_02_output")
    task_02_output.innerHTML = ''
    for (let i = 0; i < colors.length; i++) {
        task_02_output.innerHTML += `${colors[i]}, `
        console.log(colors[i])
    }
}

function task03() {
    console.log("*** Task - 03 ***")

    let task_03_output = document.querySelector("#task_03_output")
    task_03_output.innerHTML = ''
    for (let i = 1; i <= 10; i++) {
        task_03_output.innerHTML += `<br/> ${[i]}`
        console.log(i)
    }
}

function task04() {
    console.log("*** Task - 04 ***")

    let task_04_output = document.querySelector("#task_04_output");
    task_04_output.innerHTML = '';
    
    let i = 5;
    while(i >= 1) {
        task_04_output.innerHTML += `<br/> ${[i]}`
        console.log(i);
        i--;
    }
}

function task05() {
    console.log("*** Task - 05 ***")

    let namesArr = ["Ali", "Sara", "Ahmed"]
    let task_05_output = document.querySelector("#task_05_output")
    task_05_output.innerHTML = ''
    for (let i = 0; i < namesArr.length; i++) {
        task_05_output.innerHTML += `${namesArr[i]}, `
        console.log(namesArr[i])
    }
}

function task06() {
    console.log("*** Task - 06 ***")

    let task_06_output = document.querySelector("#task_06_output")
    task_06_output.innerHTML = ''
    task_06_output.innerHTML = "Loading..."
    console.log("Loading...")
}

function task07() {
    console.log("*** Task - 01 ***")

    let numbers = [5, 10, 15]
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        console.log(sum += numbers[i])
    }
    console.log(sum)
}

task07()