// Program that, from an array containing the ages of 20 students (randomly generated between 18 and 35), calculates and returns the average age of that class.


let studentsAge = [];
for (let i = 0; i < 20; i++) {
    studentsAge[i] = Math.floor(Math.random() * ((35 + 1) - 18) + 18);
    console.log(studentsAge[i])
}

let add = 0;

for (let i = 0; i < studentsAge.length; i++) {
    add += studentsAge[i];
}

alert(add/studentsAge.length)