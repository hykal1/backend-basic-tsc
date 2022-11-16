/**
 * --- JavaScript Callback
 * A callback function is a function passed into another function as an argument, 
 * which is then invoked inside the outer function to complete some kind of routine or action.
 */

function greetingInEnglish(name) {
    console.log(`Hello, ${name}`);
}

function sayHi(name, callback) {
    if (callback) {
        return callback(name);
    }

    console.log(name);
}
 
sayHi("Abimanyu");
sayHi("Abimanyu", greetingInEnglish);

const myArray = [
    {
        name: "Abi",
        jurusan: "Informatika",
    },
    {
        name: "Aziz",
        jurusan: "Sistem Informasi",
    },
    {
        name: "Adrian",
        jurusan: "Informatika",
    },
]

myArray.forEach((value, index) => {
    if (value.jurusan === "Informatika") console.log(index, value.name);
})