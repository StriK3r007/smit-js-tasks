// Note use console see the output.
alert("Note: use console see the output.")

// task_01: Use map() to double each number in the array: [1, 2, 3, 4, 5].
const task_01 = () => {
    console.clear()
    console.log("Task - 01")
    const body = document.getElementById("body")
    
    const numbers = [1, 2, 3, 4, 5]
    const doubleNumbers = numbers.map(number => number * 2)
    console.log(`Before: ${numbers}`)
    console.log(`After: ${doubleNumbers}`)
}