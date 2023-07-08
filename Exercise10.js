//Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

function sumArray(numbers) {
    return numbers.reduce((num1, num2) => num1 + num2 );
}
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum);
