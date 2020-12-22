// https://youtu.be/Stne4zasR8M?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv&t=3

'use strict';

function greet(greeting = 'Hello World') {
  console.log(greeting);
  // return greeting;
}

greet('Hello');
greet();
// document.write(greet());// when return use for DOM display

// ************ Spreed Operator ********************

let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test() {
  console.log(`${args1},${args2}`);
}

// test(...args1);
test(...args1, ...args2);

// there is a better way to use spreed operator :( use that.
