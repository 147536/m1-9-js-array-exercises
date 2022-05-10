// Create an array. Ask the user 3 times to write a string. Store each of those strings at position 0 , 1 and 2. Show on the screen in the order: first position 1, then position 2 and last position 0. //

let array = [];

for (let i = 0; i < 3; i++) {
    array[i] = prompt("Enter a text:");
}

alert(array[1]);
alert(array[2]);
alert(array[0]);
