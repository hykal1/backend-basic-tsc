/**
 * --- SOAL LIMA
 * Buatlah logika perulangan untuk melakukan sort by age secara terurut dari yang termuda 'ASCENDING'
 * 
 * Test Case:
 * let john = { name: "John", age: 25 };
 * let pete = { name: "Pete", age: 30 };
 * let mary = { name: "Mary", age: 28 };
 * let arr = [ pete, john, mary ];
 * 
 * maka return value adalah [ john, mary, pete ]
 */

module.exports = function sortByAge(data) {
    // Write your code here
    const returnName = []
    const sortByAge = data.sort((first, second) => {
        return first.age - second.age;
    })
    
    sortByAge.map((data) => {
        returnName.push(data.name)
    })
    
    console.log(returnName)
}

const sortByAge = require("./Soal_5")

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [john, pete, mary];

sortByAge(arr)