// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

function filterEvenNumbers (numbers) {
    return numbers.filter(num => num % 2 === 0)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const evenNumbers = filterEvenNumbers(numbers)
console.log(evenNumbers)