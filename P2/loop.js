/*
 * --- JavaScript Loops 
 * A loop is a programming tool that is used to repeat a set of instructions. 
 * Iterate is a generic term that means “to repeat” in the context of loops.
 *  
 * A loop will continue to iterate until a specified condition, 
 * commonly known as a stopping condition, is met.
 * 
 */


/* While Loop */
// let i = 0;
// while (i < 5) {        
//   console.log(i);
//   i++;
// }

/* Do While Loop */ // Minimal 1 kali 
let x = 0
let i = 0

do {
  x += i;
  console.log(x)
  i++;
} while (i < 5);


/* For Loop */
// for (let i = 0; i < 4; i += 1) {
//     console.log(i);
// };