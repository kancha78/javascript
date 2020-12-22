// https://youtu.be/XGG-OY8pJqA?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv&t=26

'use strict';

let theString = 'Hello my name is Kamran and I love String Method';

// startsWith()
// endsWith()
// includes()

console.log(theString.startsWith('Hello')); // true is ello then false
console.log(theString.endsWith('Method')); // true
console.log(theString.endsWith('method')); // false (M not m)

console.log(theString.includes('Kamran')); // output true

// Hex
console.log(0xff);
// Binary with letter b
console.log(0b1110);
// Octal with letter o
console.log(0o543);

// ************* NUMBER METHOD ******************

console.log(Number.isFinite(3));
console.log(Number.isFinite(-3));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
// isNaN()
console.log(Number.isNaN(NaN));
// isInteger 
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(2));
console.log(Number.isInteger(Infinity));