// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.

function doubleNumbers (numbers) {
    return numbers.map(num => num * 2);
}

const numbers = [1, 2, 3, 4, 5]
const dblNumbers = doubleNumbers(numbers)
console.log(dblNumbers)
