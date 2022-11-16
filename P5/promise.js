/**
 * --- JavaScript Promise
 * "Producing code" is code that can take some time
 * "Consuming code" is code that must wait for the result
 * A Promise is a JavaScript object that links producing and consuming code
 */

// let myPromise = new Promise((myResolve, myReject) => {
//     // "Producing Code" (May take some time)
    
//     myResolve(); // when successful
//     myReject();  // when error
// });
    
// "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function(value) { /* code if successful */ },
//     function(error) { /* code if some error */ }
// );

/**
 * A JavaScript Promise object can be:
 *   - Pending
 *   - Fulfilled
 *   - Rejected
 * The Promise object supports two properties: state and result.
 * 
 * While a Promise object is "pending" (working), the result is undefined.
 * When a Promise object is "fulfilled", the result is a value.
 * When a Promise object is "rejected", the result is an error object.
 */

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("hello");
  }, 2000);
});


myPromise
  .then((value) => `${value} world`, )
  .then((value) => `${value} and planet`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });


// More about promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise