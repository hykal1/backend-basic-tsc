/*
 * --- JavaScript Control Flow
 * Control flow is the order in which statements are executed in a program. 
 * The default control flow is for statements to be read and executed in order from left-to-right, 
 * top-to-bottom in a program file.
 * 
 * Control structures such as conditionals
 * alter control flow by only executing blocks of code if certain conditions are met. 
 * These structures essentially allow a program to make decisions about 
 * which code is executed as the program runs.
 * 
 */

// If else
/* const isTaskCompleted = false; // null, undefined, 0
 
if (!isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
} */

// Ternary
/* let price = 10.5;
let day = "Monday";
let month = "October";
day === "Monday" ? price -= 1.5 : price += 1.5;
console.log(price); */

// else if
/* const size = 10;
 
if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
} */

// Switch-case
/* const food = 'oyster';
 
switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
} */

/*
 * In JavaScript, values evaluate to true or false when evaluated as Booleans.
 *  - Values that evaluate to true are known as truthy
 *  - Values that evaluate to false are known as falsy
 * Falsy values include false, 0, empty strings, null undefined, and NaN. 
 * All other values are truthy.
 */