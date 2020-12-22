// Generators

function* g1() {
  console.log('Hello');
  yield 'Yield 1 Ran..';
  console.log('World');
  yield 'Yield 2 Ran...';
  return 'Returned..';
}

let g = g1();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next());

//////////////////////////////////////// new

// function* g1() {
//   console.log('Hello');
//   yield 'Yield 1 Ran..';
//   console.log('World');
//   yield 'Yield 2 Ran...';
//   return 'Returned..';
// }

// let g = g1();

// for (const val of g) {
//   console.log(val);
// }
