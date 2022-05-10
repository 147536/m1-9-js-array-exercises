// Program that performs the average of the values contained in an array of 10 numbers and displays it on the console. (It is not necessary to ask the user for the numbers.)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let add = 0;

for (let i = 0; i < numbers.length; i++) {
    add += numbers[i];
}

alert(add/numbers.length)