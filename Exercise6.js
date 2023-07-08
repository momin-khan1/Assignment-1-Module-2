//Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

function getLargestNumber(numbers1, numbers2) {
    return numbers1 >= numbers2 && numbers1 || numbers2;
}

console.log(getLargestNumber(10, 5));
