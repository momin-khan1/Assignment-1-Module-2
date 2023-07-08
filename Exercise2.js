//Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.

function sumNumbers(...numbers) {
    return numbers.reduce((num1, num2) => num1 + num2);
}

const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1);
