// https://youtu.be/Stne4zasR8M?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv&t=3

'use strict';

// let myArray = [11, 12, 13, 14];
// let mySet = new Set(myArray);

// mySet.add('100'); // adding in mySet which will add in myArray
// mySet.add({ a: 1, b: 2 }); // adding object
// mySet.delete(12); // deleting 12
// mySet.add({ a: 1, b: 2 }); // adding object
// // mySet.clear(); // to clear (Empty)
// mySet.add('150'); // adding in mySet which will add in myArray
// mySet.add('200'); // adding in mySet which will add in myArray

// // console.log(...mySet); // used spreed operator (...) showing all
// console.log(mySet.size); // to check size of Set // 2 after clear

// // Loop in mySet

// mySet.forEach(function(val){
//   console.log(val);
// })

// ***************** USING MAP ***********************

// let myMap = new Map([
//   ['a1', 'Hello'],
//   ['b2', 'Goodbye'],
// ]);

// myMap.set('c3', 'foo') // Adding to Map
// myMap.delete('a1', 'foo') // deleting from Map by key name

// console.log(...myMap);// using (...spreed)operator
// console.log(myMap.size);

// *************** WEAK SET **** WEAK MAP ******************

// let carWeakSet = new WeakSet();

// let car1 = {
//   make: 'Honda',
//   model: 'Civic',
// };

// // Adding car1 object values in the set
// carWeakSet.add(car1);

// let car2 = {
//   make: 'Toyota',
//   model: 'Camry',
// };

// // Adding car2 object properties in the set
// carWeakSet.add(car2);

// carWeakSet.delete(car1);// will delete car1 object

// console.log(carWeakSet);

//**** WEAK MAP ********

let carWeakMap = new WeakMap();

let key1 = {
  id: 1,
};

let car1 = {
  make: 'Honda',
  model: 'Civic',
};

let key2 = {
  id: 2,
};

let car2 = {
  make: 'Toyota',
  model: 'Camry',
};

carWeakMap.set(key1, car1); // Adding Key1 value as object in carWeakMap
carWeakMap.set(key2, car2); // Adding Key2 value as object in carWeakMap

carWeakMap.delete(key1); // deleting by key

console.log(carWeakMap);
