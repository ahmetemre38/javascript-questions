const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}