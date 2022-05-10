// // Create an array. Assign 10 different values within it. Show all 10 values on screen. //

let array = [];

for (let i = 0; i < 10; i++) {
    array.push(prompt("Enter any value:"))
}

let text = ""
for (let i = 0; i < 10; i++) {
    text += array[i] + "\n";
}

alert(text) 