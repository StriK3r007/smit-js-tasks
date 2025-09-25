// task_01: 1. Use map() to double each number in the array: [1, 2, 3, 4, 5].
const task_01 = () => {
    const numbers = [1, 2, 3, 4, 5]
    const doubleNumbers = numbers.map(number => number * 2)
    doubleNumbers.map(number => {
        console.log(`Before: ${}`)
    })
}