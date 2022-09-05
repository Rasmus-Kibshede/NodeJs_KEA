// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberResultex1 = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(numberResultex1);


// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const numberResultex2 = Number(anotherNumberOne) + Number(anotherNumberTwo);

console.log(numberResultex2.toFixed(2));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


const avg = ((one + two + three) / 3).toFixed(5);

console.log(avg);


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const cIndex = letters[2];

console.log(cIndex);

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const newFact = fact.replace("j", "J");

console.log(newFact);

// --------------------------------------



