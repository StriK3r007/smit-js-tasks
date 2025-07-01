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
    console.log(`After removing 2 items: ${cities}`)
    let citiesUpdatedOutput = document.querySelector("#citiesUpdatedOutput").innerHTML = cities
}

// task_07 | Use slice() to get the first 3 items from a countries array.
function task07() {
    console.info("Task 07")
    let countries = ["Pakistan", "Iran", "Afghanistan", "China", "Russia", "India"]
    console.log(`Array: ${countries}`)
    let countriesUpdated = countries.slice(0, 3)
    console.log(`1st 3 items of array: ${countriesUpdated}`)
    let countriesUpdatedOutput = document.querySelector("#countriesUpdatedOutput").innerHTML = countriesUpdated
}

// task_08 | Convert the string "apple,banana,mango" into an array using split().
function task08() {
    console.info("Task 08")
    let string = "apple,banana,mango";
    console.log(`String: ${string}`)
    let stringArr = string.split(",")
    console.log(`Array: ${stringArr}`)
    let stringToArrayOutput = document.querySelector("#stringToArrayOutput").innerHTML = stringArr
}

// task_09 | Join an array of characters ['J','S'] into a single string using join().
function task09() {
    console.info("Task 09")
    let charactersArr = ['J','S'];
    console.log(`Characters Array: ${charactersArr}`)
    let charactersString = charactersArr.join()
    console.log(`Single String: ${charactersString}`)
    let joinCharactersOutput = document.querySelector("#joinCharactersOutput").innerHTML = charactersString
}
// task_10 | Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using concat().
function task10() {
    console.info("Task 10")
    let arrOne = ['pen','pencil'];
    let arrTwo = ['eraser','sharpener'];
    console.log(`1st Array: ${arrOne}`)
    console.log(`2nd Array: ${arrTwo}`)
    console.log(`Concateneted Array: ${arrOne.concat(arrTwo)}`)
    let mergedArrayOutput = document.querySelector("#mergedArrayOutput").innerHTML = arrOne.concat(arrTwo)
}

// task_11 | Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).
function task11() {
    let numbers = [10, 5, 2, 8,];
    numbers.sort((a, b) => a - b);
    let sortedArrayOutput = document.querySelector("#sortedArrayOutput")
    sortedArrayOutput.innerHTML = numbers.join(', ');
}

// task_12 | Sort an array of names alphabetically using sort().
function task12() {
    let names = ['zubair', 'inam', 'kifayat', 'ilham'];
    names.sort();
    let sortedNamesOutput = document.querySelector("#sortedNamesOutput")
    sortedNamesOutput.innerHTML = names.join(', ')
}

// task_13 | Reverse the order of an array of numbers using reverse().
function task13() {
    let numbers = [10, 5, 2, 8,];
    numbers.reverse()
    let reverseArrayOutput = document.querySelector("#reverseArrayOutput")
    reverseArrayOutput.innerHTML = numbers.join(', ');
}

// task_14 | Use indexOf() to find the index of "Blue" in a colors array.
function task14() {
    let colors = ["Red", "Green", "Blue", "Yellow", "Black", "Cyan"];
    let color = document.querySelector("#arrayIndex").value; 
    let index = colors.indexOf(color);
    let indexOfOutput = document.querySelector("#indexOfOutput");
    if (index !== -1) {
        indexOfOutput.innerHTML = `The color "${color}" is found at index: ${index}`;
    } else {
        indexOfOutput.innerHTML = `The color "${color}" was not found.`;
    }
}

// task_15 | Add three new items to an empty array using push().
function task15() {
    let Arr = []
    let itemOne = document.querySelector("#itemOne").value; 
    let itemTwo = document.querySelector("#itemTwo").value; 
    let itemThree = document.querySelector("#itemThree").value;
    let threeItemsOutput = document.querySelector("#threeItemsOutput");
    if (itemOne == '' || itemTwo == '' || itemThree == '') {
        threeItemsOutput.innerHTML = "All items are required"
    }
    else {
        Arr.push(itemOne);
        Arr.push(itemTwo);
        Arr.push(itemThree);
        threeItemsOutput.innerHTML = Arr.join(', ');
    }
}

// task_16 | Remove the middle item from an array of 5 numbers using splice().
function task16() {
    console.info("Task 16")
    let numbers = [2, 5, 3, 10, 7]
    console.log(`Array: ${numbers}`)
    let numbersUpdated = numbers.splice(2, 1)
    console.log(`After removing middle items: ${numbers}`)
    let removeMiddleItemOutput = document.querySelector("#removeMiddleItemOutput").innerHTML = numbers
}