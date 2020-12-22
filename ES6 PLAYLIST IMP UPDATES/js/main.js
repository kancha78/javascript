'use strict';

// // use of var and let

// function testVar(){
//   var a = 30;
//   if(true){
//     var a = 50
//     console.log(a);
//   }
// console.log(a);
// }

// testVar(); // Output 50 50

// function testLet(){
//   let x = 30;
//   if(true){
//     let x = 50;
//     console.log(x);
//   }
//   console.log(x);
// }
// testLet(); // Output 50 30 first block (scope) then outer block (scope) global

// ********************************************************

// //  for Loop with var then let

// for (var i=0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// // with Let

// for (let i=0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// // we will get error for second console.log as let has to be in same scope {}

// ** const    **** variable assign with const cannot be change

const colors = [];

colors.push('red');
colors.push('blue');

console.log(colors);
