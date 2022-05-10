// // Create an empty array. It then asks the user to enter 10 values into that array using a for to display them on the screen.

let array = [];

for (let i = 0; i < 10; i++) {
    array.push(prompt("Enter any value:"))
}

let text = ""
for (let i = 0; i < 10; i++) {
    text += array[i] + "\n";
}

alert(text) 