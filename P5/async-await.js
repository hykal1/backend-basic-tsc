/**
 * --- Async and Await
 * async makes a function return a Promise
 * await makes a function wait for a Promise
 */

// async function myFunction() {
//   return "Test"
// }

// // Is the same as:
// function myFunction() {
//   return Promise.resolve("Hello");
// }

// async function main() {
//     const res = myFunction();

//     console.log(res);
// }

// main();



/**
 * -- Await Syntax
 * 
 * The await keyword can only be used inside an async function. 
 * It makes the function pause the execution and wait for a resolved promise before it continues:
 * 
 * e.g: 
 * let value = await promise;
 */

// async function saySomething() {
//   let myPromise = new Promise(function(resolve, reject) {
//     resolve("Hello there!");
//   });
//   console.log(await myPromise)
// }

// saySomething();

async function myAsync() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello There!"), 2000);
    });
}

async function saySomething() {
    const res = await myAsync();
    console.log(res);
}

saySomething();