<<<<<<< HEAD
// Note use console see the output.
alert("Note: use console see the output.")

=======
>>>>>>> bc528b6df2a6be8abbec22f2724ba5cb5345f029
// task_01: Use map() to double each number in the array: [1, 2, 3, 4, 5].
const task_01 = () => {
    console.clear()
    console.log("Task - 01")
    const numbers = [1, 2, 3, 4, 5]
    const doubleNumbers = numbers.map(number => number * 2)
    console.log(`Before: ${numbers}`)
    console.log(`After: ${doubleNumbers}`)
}

// task_02: Use map() to convert an array of strings to uppercase: ["apple", "banana", "cherry"].
const task_02 = () => {
    console.clear()
    console.log("Task - 02")
    const fruitsLowerCase = ["apple", "banana", "cherry"]
    const fruitsUpperCase = fruitsLowerCase.map(fruit => fruit.toLocaleUpperCase())
    console.log(`Before: ${fruitsLowerCase}`)
    console.log(`After: ${fruitsUpperCase}`)
}

// task_03: Use map() to extract the names from an array of objects: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}].
const task_03 = () => {
    console.clear()
    console.log("Task - 03")
    const names = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}]
    console.log("Extracted Names:")
    names.map(name => console.log(name.name))
}

// task_04: Use map() to return the length of each word in the array: ["dog", "elephant", "tiger"]
const task_04 = () => {
    console.clear()
    console.log("Task - 04")
    const animals = ["dog", "elephant", "tiger"]
    animals.map(animal => console.log(`Length of word ${animal} is ${animal.length}`))
}

// task_05: Use map() to add a suffix -done to each task in an array: ["task1", "task2", "task3"]
const task_05 = () => {
    console.clear()
    console.log("Task - 05")
    const tasks = ["task1", "task2", "task3"]
    tasks.map(task => console.log(`${task} -done`))
}

// task_06: Use map() to square each number in an array: [2, 4, 6, 8].
const task_06 = () => {
    console.clear()
    console.log("Task - 06")
    const numbers = [2, 4, 6, 8]
    numbers.map(number => console.log(`Square of ${number} is ${number*2}`))
}

// task_07: Use map() to convert an array of prices to strings with a $ sign
const task_07 = () => {
    console.clear()
    console.log("Task - 07")
    const prices = ["503.71", "407.32", "222.69", "43.00", "237.64"]
    const priceString = prices.map(price => `$${price}`)
    priceString.map(price => console.log(`${price}`))
}

// task_08: Use map() to format an array of dates into readable strings.
const task_08 = () => {
    console.clear()
    console.log("Task - 08")
    console.log("Pending...")
}

// task_09: Use map() to create an array of booleans indicating if each number is even.
const task_09 = () => {
    console.clear()
    console.log("Task - 09")
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const numbersBool = numbers.map(number => number % 2 == 0)
    console.log(`Numbers: ${numbers}`)
    console.log(`Numbers Bool: ${numbersBool}`)
}

// task_10: Use map() to append the index to each string in an array.
const task_10 = () => {
    console.clear()
    console.log("Task - 10")
    const random = ["bypassing", "capacitor", "Total"]
    random.map((item, index) => console.log(`${item} ${index}`))
}

// task_11:  Use filter() to keep only the even numbers: [1, 2, 3, 4, 5, 6]
const task_11 = () => {
    console.clear()
    console.log("Task - 11")
    const numbers = [1, 2, 3, 4, 5, 6]
    const evenNumbers = numbers.filter(number => number % 2 == 0)
    console.log(evenNumbers)
}

// task_12: Use filter() to remove all negative numbers from an array: [-3, 4, -1, 7, -5].
const task_12 = () => {
    console.clear()
    console.log("Task - 12")
    const numbers = [-3, 4, -1, 7, -5]
    const positiveNumbers = numbers.filter(number => number > 0)
    console.log(positiveNumbers)
}

// task_13: Use filter() to get names longer than 4 characters: ["Joe", "Elizabeth", "Tom", "Anna"].
const task_13 = () => {
    console.clear()
    console.log("Task - 13")
    const namesArr = ["Joe", "Elizabeth", "Tom", "Anna"]
    const namesLongerThanFourChar = namesArr.filter(item => item.length > 4)
    console.log(namesLongerThanFourChar)
}

// task_14: Use filter() to find all users who are active: [{name: "Alice", active: true}, {name: "Bob", active: false}].
const task_14 = () => {
    console.clear()
    console.log("Task - 14")
    const usersObj = [{name: "Alice", active: true}, {name: "Bob", active: false}]
    const activeUsers = usersObj.filter(user => user.active == true)
    console.log(activeUsers)
}

// task_15: Use filter() to get all words starting with the letter "a".
const task_15 = () => {
    console.clear()
    console.log("Task - 15")
    const string = "Zubair Ahmed".split(" ")
    const stringStartFromA = string.filter(item => item[0] == 'A' || item[0] == 'a')
    console.log(`Before: ${string}`)
    console.log(`After: ${stringStartFromA}`)
}

// task_16: Use filter() to keep only numbers greater than 10.
const task_16 = () => {
    console.clear()
    console.log("Task - 16")
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1]
    const numbersGreaterThan10 = numbers.filter(number => number > 10)
    console.log(`Before: ${numbers}`)
    console.log(`After: ${numbersGreaterThan10}`)
}

// task_17: Use filter() to remove all falsy values from an array.
const task_17 = () => {
    console.clear()
    console.log("Task - 17")
    const unfilteredArr = [0, 1, '', null, 'hello', false, 42, NaN, undefined, {}, []];
    const filteredArr = unfilteredArr.filter(Boolean) 
    console.log(`Before: ${unfilteredArr}`)
    console.log(`After: ${filteredArr}`)
}

// task_18: Use filter() to get strings that include the word "code".
const task_18 = () => {
    console.clear()
    console.log("Task - 18")
    const stringsArr = "In today's digital age, learning to code has become an essential skill. Whether you're building websites, developing software, or analyzing data, understanding how to write code opens up countless opportunities. Code is the backbone of modern technology, and it powers everything from mobile apps to artificial intelligence. By mastering programming languages, individuals can create innovative solutions, automate tasks, and contribute to the ever-evolving tech landscape. The ability to code is no longer limited to computer scientists; it's a valuable tool for anyone who wants to thrive in the digital world.".toLocaleLowerCase().split(".")
    // const stringsArr = [
    //     "I love coding",
    //     "JavaScript is cool",
    //     "Learning to code is fun",
    //     "This is a string without the word",
    //     "Let's code something together"
    // ];
    const codeArr = stringsArr.filter(string => string.toLocaleLowerCase().includes("code"))
    console.log(`Before: ${stringsArr}`)
    console.log(`After: ${codeArr}`)
}

// task_19: Use filter() to exclude null or undefined values.
const task_19 = () => {
    console.clear()
    console.log("Task - 19")
    const unfilteredArr = [0, 1, '', null, 'hello', false, 42, NaN, undefined, {}, []];

    const filteredArr = unfilteredArr.filter(item => item !== undefined && item !== null)
    console.log(filteredArr)

}

// task_20: Use filter() to return products with price less than 100: [{name: "Phone", price: 99}, {name: "Tablet", price: 120}].
const task_20 = () => {
    console.clear()
    console.log("Task - 20")
    const products = [{name: "Phone", price: 99}, {name: "Tablet", price: 120}]
    const priceLessThan100 = products.filter(product => product.price < 100)
    console.log(priceLessThan100)
}

// task_21: Use reduce() to sum all numbers in an array: [1, 2, 3, 4].
const task_21 = () => {
    console.clear()
    console.log("Task - 21")
    const numbers = [1, 2, 3, 4]
    const sum = numbers.reduce((acc, cval) => acc + cval, 0)
    console.log(sum)
}

// task_22: Use reduce() to find the maximum number in an array.
const task_22 = () => {
    console.clear()
    console.log("Task - 22")
    const numbers = [1, 2, 3, 4]
    // const maxNum = numbers.reduce((acc, cval) => (acc > cval ? acc : cval), numbers[0]);

    // sconst maxNum = numbers.reduce((acc, cval) => Math.max(acc, cval), numbers[0]);
    const maxNum = numbers.reduce((acc, cval) => {
        if (acc > cval){
            return acc
        }
        else {
            return cval
        }
    }, 0)
    console.log(maxNum)
}

// task_23: Use reduce() to count how many times each element appears: ["apple", "banana", "apple", "orange", "banana"].
const task_23 = () => {
    console.clear()
    console.log("Task - 23")
    const fruits = ["apple", "banana", "apple", "orange", "banana"]
    const counter = fruits.reduce((acc, fruit) => {
        if (acc[fruit]) {
            acc[fruit]++
        } else {
            acc[fruit] = 1
        }
        return acc
    }, {})
    console.log(counter)
}