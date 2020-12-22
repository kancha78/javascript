// Arrow Function

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   let that = this;
//   return arr.map((x) => {
//     console.log(this.prefix + x);
//   });
// };

// let pre = new Prefixer('Hello ');
// pre.prefixArray(['Kamran', 'Khan']);

/////////////////////////////////////////////////////new

let add = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return false;
};

add(10, 2);
