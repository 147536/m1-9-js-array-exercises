// Create an array of 10 values. Put the value 1 in each of the positions. Ask the user to enter a number between 0 and 9. Each time he enters a value between 0 and 9, display the value of that position in the array, and modify it by multiplying by 2. If he enters a value out of range, terminate the program and shows the content of the array.

let array = [];

for (let i = 0; i < 10; i++) {
    array[i] = 1;
}
let exit = false;
while (!exit) {
    let num = parseInt(prompt("Enter a numeric value:"))

    if (num > 9 || num < 0) {
        exit = true
    } else {
        array[num] *= 2
        alert(array[num]);
    }
}

let text = ""
for (let i = 0; i < array.length; i++) {
    text += array[i] + "\n";
}

alert(text)