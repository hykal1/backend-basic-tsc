/**
 * --- Popping and Pushing
 */

// The pop() method removes the last element from an array:
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); */

// The pop() method returns the value that was "popped out":
// console.log(fruits.pop())

// The push() method adds a new element to an array (at the end):
// fruits.push("Kiwi");


// The push() method returns the new array length:
// console.log(fruits.push("Kiwi"));
// console.log(fruits);


/**
 * --- Shifting elements
 * Shifting is equivalent to popping, but working on the first element instead of the last.
 */

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
/* const food = ["Pizza", "Spaghetti", "Fettuccine", "French Toast"];
food.shift(); */


// The shift() method returns the value that was "shifted out":
/* console.log(food.shift()); */



/**
 * Changing Elements
 */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "asdfasdfa";
console.log(fruits.length);
fruits[fruits.length] = "Kiwi";
console.log(fruits); */


/**
 * Concatenating Arrays
 */
/* const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr3 = [6, 7, 8];
const arr4 = [9, 10, 11];

const newArr = arr1.concat(arr2); */
/* const newArr = arr1.concat(arr2, arr3, arr4);
const newArr = arr1.concat("tiga"); */

// console.log(newArr);



/**
 * Splicing and Slicing
 */

/**
 * 
 * The splice() method can be used to add new items to an array:
 * The first parameter (2) defines the position where new elements should be added (spliced in).
 * The second parameter (0) defines how many elements should be removed.
 * The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
 */
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi", "Strawberry"); */


// The splice() method returns an array with the deleted items:
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi"); */

//  You can use splice() to remove elements without leaving "holes" in the array:
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1);

console.log(fruits); */

/**
 * The slice() method creates a new array and 
 * does not remove any elements from the source array.
 * 
 * usage: slice(start index, end)
 */
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(1, 3))

// If the end argument is omitted, the slice() method slices out the rest of the array.
// console.log(fruits.slice(2));