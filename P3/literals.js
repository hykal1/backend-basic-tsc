/*
 * --- JavaScript Template Literals
 * Template literals are literals delimited with backtick (`) characters, 
 * allowing for multi-line strings, string interpolation with embedded expressions, 
 * and special constructs called tagged templates.
 * 
 * example: `string text ${expression} string text`
 */

/* -- Multi-line string */
/* 
 * Normal string 
 */
const str1 = 'string text line 1';
const str2 = 'string text line';
console.log(str1 + '\n' + str2 + " " + 342323);

/*
 * Template literals
 */
console.log(`${str1}\n${str2} ${342323}`);

/* -- String interpolation */
/* 
 * Normal string
 */
// const a = 5;
// const b = 10;
// console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");

/* 
 * Template Literals 
 */
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
