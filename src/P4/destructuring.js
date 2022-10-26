/**
 * --- Destructuring
 * Destructuring assignment is a special syntax that allows us to “unpack” 
 * arrays or objects into a bunch of variables
 */

/* let arr = ["John", "Smith"]
let [firstName, surname] = arr;

console.log(firstName);
console.log(surname); */


/* let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
console.log(guest);
console.log(admin); */

// Ignore elements using commas
/* let [fruit1,, fruit3] = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruit1);
console.log(fruit3); */

// Any iterable
/* let [a, b, c] = "abc"; // ["a", "b", "c"]
console.log(a, b, c); */

/* let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three); */

/* let [fruit1, fruit2, ...sisa] = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruit1);
console.log(fruit2);
console.log(sisa);
console.log(sisa[0]); */

/* Object Destructuring */
/* let options = {
    title: "Menu",
    width: 100,
    height: 200
};
  
let { title, width, height } = options;
console.log(title, width, height);
*/

// Assign to another name
/* let { width: w, height: h, title } = options;
console.log(w, h, title) */


// Default value
/* let options = {
    title: "Menu",
    width: 500
};

let { width = 100, height = 200, title } = options;
console.log(title, width, height);
 */