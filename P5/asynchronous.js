/**
 * --- JavaScript Asynchronous
 * 
 * Functions running in parallel with other functions are called asynchronous
 * A good example is JavaScript setTimeout()
 * 
 * Synchronous vs Asynchronous: https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/
 */

/**
 * Synchronous
 */
function f1() {
    console.log("Function 1");
}
function f2() {
    console.log("Function 2");
}
function f3() {
    console.log("Function 3");
}

// Invoke the functions one by one
// f1();
// f2();
// f3();

/**
 * Asynchronous
 */
function printMe() {
  console.log('print me');
}

function test() {
  console.log('test');
}

setTimeout(printMe, 2000);
test();

/**
 * The setTimeout function executes a function after a certain amount of time has elapsed. 
 * In the code above, the text print me logs into the console after a delay of 2 seconds.
 */