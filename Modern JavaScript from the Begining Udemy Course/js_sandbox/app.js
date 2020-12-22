// // Log to consol
// console.log('Hello World');
// console.log(123);
// console.log(true);

// let greeting = 'hello';
// console.log(greeting);

// console.log([1, 2, 3, 4]);
// console.table({ a: 1, b: 2 });
// console.error('This is Error.');
// console.clear();

//////////////////////////////////////////////////
// // LET      LET CAN BE REDEFINE AGAIN.:)
// let name = 'Kamran Muhammad';
// console.log(name);

// // CONST     CONST CAN NOT BE REDEFINE
// const name = 'Khan';
// console.log(name);

// // OBJECT

// const person = {
//   name: 'Kamran',
//   age: 30,
// };

// person.name = 'Hadi';
// console.log(person);

// // ARRAY

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);

// console.log(numbers);

// // DATA TYPE - PRIMITIVE  AND REFERENCE

// // PRIMITIVE DATA TYPES

// // STRING
// const name = 'Kamran Muhammad';
// console.log(typeof name);
// // NUMBER
// const age = 45;
// console.log(typeof age);
// // BOOLEAN
// const hasKids = true;
// console.log(typeof hasKids);
// // NULL
// const car = null;
// console.log(typeof car);
// // UNDEFINED
// let test;
// console.log(typeof test);
// // SYMBOLS ES6
// const sym = Symbol();
// console.log(sym);

// // REFERENCE DATA TYPE / OBJECTS

// // ARRAYS
// const hobbies = ['movies', 'music'];
// console.log(typeof hobbies);
// // OBJECT LITERALS
// const address = {
//   city: 'New York',
//   State: 'NY',
// };
// console.log(typeof address);
// // FUNCTIONS

// // DATES
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// // ANYTHING ELSE

// // TYPE CONVERSION

// let val;

// // NUMBER TO STRING
// val = String(555);
// val = String(4 + 4);
// //boolean to string
// val = String(true);
// //Date to String
// val = String(new Date());
// //Array to String
// val = String([1, 2, 3, 4]);
// //toString()
// val = (5).toString();
// val = true.toString();

// // string to number

// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1, 2, 3]);

// val = parseInt('100.30');
// val = parseFloat('100.30');

// //output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

/////////////////////////////////////////////////////

// // NUMBER AND THE MATH OBJECT
// const num1 = 100;
// const num2 = 50;
// let val;

// //simple Math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

// // ********** STRINGS METHODS CONCAT*****************

// const firstName = 'Kamran';
// const lastName = 'Muhammad';
// const age = 40;
// const str = 'Hello there my name is Kamran';
// const tags = 'web design, web development, programming';

// let val;
// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// //Append = add

// val = 'Safia ';
// val += 'Ali';

// val = 'Hello, My name is ' + firstName + ' and I am ' + age;

// //Escaping
// val = "that's awesome, I can't wait";

// //Length
// val = firstName.length;

// //Concat()
// val = firstName.concat(' ', lastName);

// // Change case

// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// // IndexOf()

// val = firstName.indexOf('m');
// val = firstName.lastIndexOf('n');

// // CharAt()
// val = firstName.charAt('2');

// // Get last Character
// val = firstName.charAt(firstName.length - 1);

// //substring()
// val = firstName.substring(0, 4);

// //slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3); // Last three character

// // Split()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('Kamran', 'Hadi');

// // includes()
// val = str.includes('Hello');

// console.log(val);

// // *********** Template Literal / Template string

// const name = 'Kamran';
// const age = 35;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// function hello() {
//   return 'Hello';
// }

// // Template Literal Helping Dynamically insert HTML
// html = `<ul>
// <li>Name: ${name} </li>
// <li>Age: ${age} </li>
// <li>Job: ${job} </li>
// <li>City: ${city} </li>
// <li>${2 + 2}</li>
// <li>${hello()} </li>
// <li>${age > 30 ? 'Over 30' : 'Under 30'} </li>
// </Ul>`;

// document.body.innerHTML = html;

// // *********** Arrays and Array Methods

// // create some arrays

// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', ' Pear'];
// const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// //Get array Length
// val = numbers.length;
// // Check if is Array
// val = Array.isArray(numbers); // to check if variable has value of Array?
// // Get single Value
// val = numbers[3]; // Arrays is 0 based.
// val = numbers[0];
// // Insert into Array
// numbers[2] = 100; // just add 100 on index number 2
// //Find Index of value
// val = numbers.indexOf(36);

// // Concatenate Arrays
// val = numbers.concat(numbers2);

// // Sorting Arrays
// val = fruit.sort();
// val = numbers.sort();

// // use the "Compare function"

// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// // find

// function under50(num) {
//   return num < 50;
// }

// val = numbers.find(under50);

// // find

// function over50(num) {
//   return num > 50;
// }

// val = numbers.find(over50);

// // Mutating Arrays
// numbers.push(250); // add 250 at the end of Array
// // Add on the front
// numbers.unshift(120);
// //Take off from end
// numbers.pop();
// //Take off from Front
// numbers.shift();
// // Splice Values
// numbers.splice(1, 1); // start from 1 and 1 end means 56 gone:)
// numbers.splice(1, 2); // start from 2 and  end means 100, 23 gone:)
// // Reverse
// numbers.reverse();

// console.log(numbers);
// console.log(val);

// //*********************** Object Literals */

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 36,
//   email: 'steve@aol.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL',
//   },
//   getBirthYear: function () {
//     return 2017 - this.age;
//   },
// };

// let val;

// val = person;
// //Get specific Value
// val = person.firstName;
// val = person.lastName;
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address.city;
// val = person.getBirthYear();

// console.log(val);

// const peoples = [
//   { name: 'John', age: 30 },
//   { name: 'Mike', age: 23 },
//   { name: 'Nancy', age: 40 },
// ];

// for (const people of peoples) {
//   console.log(people.name);
// }

// // ********** DATE and TIME ******

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// val = today.getMonth(); //this is 0 base - means January = 0
// val = today.getDate();
// val = today.getDay(); // 1 means Monday.
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1983);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(10);

// console.log(val);
// console.log(birthday);

//*************** IF STATEMENT IF ELSE - COMPARISON */

// const id = 100;

// //Equal to
// if (id == 101) {
//   console.log('Correct');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO

// if (id != 101) {
//   console.log('Correct');
// } else {
//   console.log('INCORRECT');
// }

// //Equal to VALUE AND TYPE
// if (id === 100) {
//   console.log('Correct');
// } else {
//   console.log('INCORRECT');
// }

// //Equal to VALUE AND TYPE
// if (id !== 100) {
//   console.log('Correct');
// } else {
//   console.log('INCORRECT');
// }

////////////////////////////////////////////////////////

// // const id = 100;
// // Test when above id is undefined means comment out.. there is no id mentioned
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log(`No ID`);
// }

// const id = 100;

// if (id) {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log(`No ID`);
// }

// // Greater or Less than

// const id = 100;

// if (id > 200) {
//   console.log(`Incorrect`);
// } else {
//   console.log(`Correct`);
// }

// // IF ELSE

// const color = 'yellow';

// if (color === 'red') {
//   console.log(`Color is red`);
// } else if (color === 'blue') {
//   console.log(`Color is blue`);
// } else {
//   console.log(`Color is not red or blue`);
// }

// // LOGICAL OPERATORS

// const name = 'Kamran';
// const age = 15;

// // and &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is a Child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an Adult`);
// }
// // OR ||
// if (age < 16 || age > 65) {
//   console.log(`${name} can not rund in the Race. :(`);
// } else {
//   console.log(`${name} is register for the Race. :)`);
// }
// /////////////////////////////////////////////////////////////

// const id = 100;
// // ? TERNARY OPERATOR if ? than else :
// console.log(id === 100 ? 'Correct' : 'Incorrect');

// // WITHOUT BRACES   = NOT RECOMMENDED
// const id = 100;
// if (id === 100) console.log('CORRECT');
// else console.log('INCORRECT');

//////////////////////////////////////////////////////////////////

// //  ************** SWITCHES ********************
// const color = 'green';

// switch (color) {
//   case 'red':
//     console.log(`color is red`);
//     break;
//   case 'blue':
//     console.log(`color is blue`);
//     break;
//   default:
//     console.log(`color is not red or blue`);
//     break;
// }
/////////////////////////////////////////////

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);

/////////////////////////////////////////////////////////////

// FUNCTION DECLARATION AND EXPRESSION  ** V. IMP **

// // FUNCTION DECLARATION

// function greet(firstName, lastName) {
//   //   console.log('Hello');
//   return `Hello, ${firstName} ${lastName}`;
// }

// console.log(greet('Kamran', 'Muhammad'));

// // ******** Function Expression

// const square = function (x = 3) {
//   return x * x;
// };

// console.log(square());

// // IMMIDIATELY INVOCABLE FUNCTION EXPRESSION - IIFEs

// // (function () {
// //   console.log('IIfE Ran..');
// // })();

// (function (name) {
//   console.log(`Hello ${name}`);
// })('Kamran');

// // PROPERTY METHODS  (wHEN A FUNCTION PUT INSIDE AN OBJECT CALLED METHOD)

// const todo = {
//   add: function () {
//     console.log('Add todo.. ');
//   },
//   edit: function (id) {
//     console.log(`Edit todo ${id}`);
//   },
// };

// todo.delete = function () {
//   console.log('Delete todo...');
// };

// todo.add();
// todo.edit(22);
// todo.delete();

//////////////////////////////////////////////////////////////////

// // LOOPS AND ITERATION

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log(`2 is my favorite number`);
//     continue;
//   }
//   if (i == 5) {
//     console.log(`Stop the Loop`);
//     break;
//   }

//   console.log(i);
// }

// // ****** WHILE LOOP  **********

// let i = 0;

// while (i < 10) {
//   console.log(`Number ${i}`);
//   i++;
// }

// // ****** DO WHILE LOOP  ********** WILL RUN ONCE AT LEAST EVERY TIME

// let i = 100;

// do {
//   console.log(`Number ${i}`);
//   i++;
// } while (i < 10);

//// ****** For LOOP in Array

// const cars = ['ford', 'chevy', 'honda', 'toyota'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

////**** forEACH OF LOOP
// const cars = ['ford', 'chevy', 'honda', 'toyota'];

// cars.forEach(function (car) {
//   console.log(car);
// });

//// Part 2
// const cars = ['ford', 'chevy', 'honda', 'toyota'];

// cars.forEach(function (car, index, array) {
//   console.log(`${index} : ${car}`); // will show array with its index number
//   console.log(array); // will show array as well
// });

// // FOR OF LOOP * MY FAVORITE

// const cars = ['ford', 'chevy', 'honda', 'toyota'];

// for (const car of cars) {
//   console.log(car);
// }

// // FOR in LOOP *
// const cars = ['ford', 'chevy', 'honda', 'toyota'];

// for (const car in cars) {
//   console.log(cars[2]);
// }

// // **** MAP Method *** to return array..
// // This is Array of Object

// const users = [
//   { id: 1, name: 'Kamran' },
//   { id: 2, name: 'Safia' },
//   { id: 3, name: 'Ayaan' },
//   { id: 4, name: 'Zoha' },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// // Part 2

// const users = {
//   firstName: 'Kamran',
//   lastName: 'Muhammad',
//   age: 40,
// };

// for (const user in users) {
//   console.log(`${user} : ${users[user]}`);
// }

// // (this will give us Key value i.e fn, ln, age but we can get it value with : ${users[user]})

//********* */
/////////////////////////////////////////////////////

// // **** Global Scop
// var a = 1;
// let b = 2;
// const c = 3;

// // console.log(`Global Scop:`, a, b, c);

// // Function Scop

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`Function Scop:`, a, b, c);
// }

// test();

// // ***** BLock Scope

// // Global Scope
// var a = 4;
// let b = 5;
// const c = 6;

// if (true) {
//   var a = 1;
//   let b = 2;
//   const c = 3;
//   console.log('If Scope: ', a, b, c);
// }

// console.log(`Global Scope: `, a, b, c);
