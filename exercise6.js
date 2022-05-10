// Create an array. Use a for to request 3 values from the user and store them in it. Compare the 3 values of the array and display the smallest one.

let array = []

for (let i = 0; i < 3; i++) {
    array[i] = parseInt(prompt("Enter a numerical value:"));
}

let small = array[0];

for (let i = 1; i < array.length; i++) {
    if (small > array[i]) {
        small = array[i]
    }
}

alert(small)
