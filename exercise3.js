// // Create an array. Use a for to assign the values from 20 to 11 to the first 10 positions (in descending order). Use a for to display the 10 values on the screen.

let array = [];

for (let i = 0, j = 20; i < 10; i++, j--) {
    array[i] = j;
}

for (let i = 0; i < 10; i++) {
    document.querySelector("body").innerHTML += array[i] + "<br>";
}