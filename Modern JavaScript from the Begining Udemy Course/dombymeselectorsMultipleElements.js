// // // ********* DOM SELECTORS   == $0 will help to select same position in
// //Multiple Collection

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';
// //
// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');

// console.log(listItems);

///////////////////////////////////////////////////////

// // document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // convert HTML COLLECTION INTO ARRAY
// lis = Array.from(lis);

// lis.reverse();

// // forEach Loop + function()
// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

///////////////////////////////////////////////////////////////

// //   ****        document.querySelectorAll //

// const items = document.querySelectorAll('ul.collection li.collection-item');

// // forEach Loop + function()
// items.forEach(function (item, index) {
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function (li, index) {
//   li.style.background = '#ccc';
// });

// //  Background change through for ..of Loop
// for (const li of liEven) {
//   li.style.background = '#666';
//   li.style.color = '#fff';
// }
// console.log(items);
