// Create an array with 11 zeros. Prompt the user to enter values between 0 and 10. Each time a digit is entered, add one to the value at that position in the array. If, for example, you enter a 3, add one to position 3. Show the values on the screen. If you enter a number greater than 10, say that number is wrong. If you enter a negative number, display the number of each position and the value it contains.

let array = [];

for (let i = 0; i < 11; i++) {
    array[i] = 0;
}
let exit = false;
while (!exit) {
    let num = parseInt(prompt("Enter a numeric value:"))

    if (num < 0) {
        exit = true
    } else if (num > 10) {
        alert("The number is incorrect.")
    } else {
        array[num] += 1
        alert(array[num]);
    }
}

let text = ""
for (let i = 0; i < array.length; i++) {
    text += array[i] + "\n";
}

alert(text)