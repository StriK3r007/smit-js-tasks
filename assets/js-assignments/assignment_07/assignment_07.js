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

// task_02 | Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to a paragraph with the ID output using document.querySelector.
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

// task_03 | Use a for loop to print numbers from 1 to 10 in the browser console.
function task03() {
    console.log("*** Task - 03 ***")

    let task_03_output = document.querySelector("#task_03_output")
    task_03_output.innerHTML = ''
    for (let i = 1; i <= 10; i++) {
        task_03_output.innerHTML += `<br/> ${[i]}`
        console.log(i)
    }
}

// task_04 | Use a while loop to print numbers from 5 to 1 in the console.
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

// task_05 | Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div with ID names to show all names separated by commas.
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

// task_06 | Change the text of a paragraph with ID status to "Loading..." using document.querySelector.
function task06() {
    console.log("*** Task - 06 ***")

    let task_06_output = document.querySelector("#task_06_output")
    task_06_output.innerHTML = ''
    task_06_output.innerHTML = "Loading..."
    console.log("Loading...")
}

// task_07 Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in a paragraph with ID sum.
function task07() {
    console.log("*** Task - 07 ***")

    let task_07_output = document.querySelector("#task_07_output")
    task_07_output.innerHTML = ''
    let numbers = [5, 10, 15]
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    task_07_output.innerHTML = sum
}

// task_08 | Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a single string in a div with ID cities.
function task08() {
    console.log("*** Task - 08 ***")

    let citiesArr = ["Karachi", "Lahore", "Quetta"]
    let task_08_output = document.querySelector("#task_08_output")
    task_08_output.innerHTML = ''
    for (let i = 0; i < citiesArr.length; i++) {
        task_08_output.innerHTML += `${citiesArr[i]} `
        console.log(citiesArr[i])
    }
}

// task_09 | Write a loop that counts from 1 to 20 and logs only the even numbers in the console.
function task09() {
    console.log("*** Task - 09 ***")

    let task_09_output = document.querySelector("#task_09_output")
    task_09_output.innerHTML = ''
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            task_09_output.innerHTML += `<br/> ${[i]}`
            console.log(i)
        }
    }
}

// task_10 | Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the largest number in a paragraph with ID max.
function task10() {
    console.log("*** Task - 10 ***");

    let numbers = [45, 22, 89, 100];
    let task_10_output = document.querySelector("#task_10_output");
    task_10_output.innerHTML = '';

    let largestNumber = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    task_10_output.innerHTML = `The largest number is: ${largestNumber}`;
    console.log(`The largest number is: ${largestNumber}`);
}

// task_11 | Use document.querySelector to select a div with ID result and change its text to "Task Complete".
function task11() {
    console.log("*** Task - 11 ***")

    let task_11_output = document.querySelector("#task_11_output")
    task_11_output.innerHTML = ''
    task_11_output.innerHTML = "Task Complete"
    console.log("Task Complete")
}

// task_12 | Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and display it inside an element with ID averageTemp.
function task12() {
    console.log("*** Task - 12 ***")

    let temperatureArr = [30, 35, 32, 40]
    let task_12_output = document.querySelector("#task_12_output")
    task_12_output.innerHTML = ''
    let sum = 0
    for (let i = 0; i < temperatureArr.length; i++) {
        sum += temperatureArr[i]
    }
    task_12_output.innerHTML = `Average Temperature is ${sum / temperatureArr.length}`
    console.log(`Average Temperature is ${sum / temperatureArr.length}°C`)
}

// task_13 | Create a loop that adds all the numbers from 1 to 100 and shows the total inside a paragraph with ID totalSum.
function task13() {
    console.log("*** Task - 13 ***")

    let task_13_output = document.querySelector("#task_13_output")
    task_13_output.innerHTML = ''
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i
    }
    task_13_output.innerHTML = `Sum  of 1 to 100 is ${sum}`
    console.log(`Sum  of 1 to 100 is ${sum}`)
}

// task_14 | Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with ID animals.
function task14() {
    console.log("*** Task - 14 ***")

    let animalsArr = ["dog", "cat", "bird"]
    let task_14_output = document.querySelector("#task_14_output")
    task_14_output.innerHTML = ''
    for (let i = 0; i < animalsArr.length; i++) {
        task_14_output.innerHTML += `${animalsArr[i]} `
        console.log(animalsArr[i])
    }
}

// task_15 | Use document.querySelector to select a heading with ID title and change its text to "Welcome to JavaScript!".
function task15() {
    console.log("*** Task - 15 ***")

    let task_15_output = document.querySelector("#task_15_output")
    task_15_output.innerHTML = ''
    task_15_output.innerHTML = "Welcome to JavaScript!"
    console.log("Welcome to JavaScript!")
}

// task_16 | Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log them to the console.
function task16() {
    console.log("*** Task - 16 ***")

    let task_16_output = document.querySelector("#task_16_output")
    task_16_output.innerHTML = ''
    for (let i = 1; i <= 50; i++) {
        if (i % 5 == 0) {
            task_16_output.innerHTML += `<br/> ${[i]}`
            console.log(i)
        }
    }
}

// task_17 | Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and display the count in a div with ID highScores.
function task17() {
    console.log("*** Task - 17 ***");

    let numbers = [80, 60, 90, 70];
    let task_17_output = document.querySelector("#task_17_output");
    task_17_output.innerHTML = '';

    let totalLargestNumber = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 75) {
            totalLargestNumber += 1;
        }
    }

    task_17_output.innerHTML = `There are ${totalLargestNumber} scores above 75`;
}

// task_18 | Select an element with ID message and change its text to "Updated successfully" using document.querySelector.
function task18() {
    console.log("*** Task - 18 ***")

    let task_18_output = document.querySelector("#task_18_output")
    task_18_output.innerHTML = ''
    task_18_output.innerHTML = "Updated successfully"
    console.log("Updated successfully")
}

// task_19 | Create an array of subjects like ["Math", "Science", "English"], and use a loop to show them in a paragraph with ID subjectsList.
function task19() {
    console.log("*** Task - 19 ***")
    let subjects = ["Math", "Science", "English"]
    let task_19_output = document.querySelector("#task_19_output")
    task_19_output.innerHTML = ''
    task_19_output.innerHTML += "Subject List"
    for (let i = 0; i < subjects.length; i++) {
        task_19_output.innerHTML += `<br/> ${subjects[i]}`
        console.log(subjects[i])
    }
}