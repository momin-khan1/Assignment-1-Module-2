//Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.

function destructureExample(object, array) {
    const { name, age } = object;
    const [index0, , index2] = array;
    return { name, age, index0, index2 };
}

const object = { name: 'Momin Khan', age: 25, city: 'Bangladesh' };
const array = ['Apple', 'Licchi', 'Mango', 'date'];
const result = destructureExample(object, array);
console.log(result);

