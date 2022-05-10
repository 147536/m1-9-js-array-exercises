// // Put the names of the months in an array of 12 positions. When the user enters a number from 1 to 12, display the name of that month on the screen

let months = ["january", "february", "march", "april", "may", "june","july", "august", "september", "october", "november", "december"]

alert("It's the month of " + months[parseInt(prompt("Please enter a month numerically")) - 1]);