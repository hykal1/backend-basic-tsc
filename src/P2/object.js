/*
 * --- JavaScript ES6 Object
 * An object is a built-in data type for storing key-value pairs. 
 * Data inside objects are unordered, and the values can be of any type.
 * 
 * 
 * JavaScript objects are mutable, meaning their contents can be changed, 
 * even when they are declared as const. 
 * New properties can be added, and existing property values can be changed or delete
 */

const profile = {
    username: "john",
    fullName: "John Doe",
    age: 20,
    isMarried: false,
    favoriteFood: ['Nasgor', 'Pecel'],
    getName() {
        return this.fullName
    }
}

console.log(profile["username"]);
console.log(profile.username);
// profile.username = "johndoee";
profile.hometown = "Canada";

// console.log(profile);