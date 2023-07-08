//Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

function sortNumbers (numbers) {
    return numbers.sort((a, b) => a - b);
}

const numbers = [5, 2, 8, 1, 4]
const sortNum = sortNumbers(numbers)
console.log(sortNum);