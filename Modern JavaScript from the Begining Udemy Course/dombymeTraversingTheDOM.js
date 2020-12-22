// // // // ********* DOM SELECTORS   == $0 will help to select same position in
// // // TraversingTheDOM

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child Nodes
// val = list.childNodes;
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// // 1 = Element
// // 2 = Attribute (deprecated)
// // 3 = Text node
// // 8 = Comment
// // 9 = Document itself
// // 10 = Doctype

// // Get Children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';
// //Children of Children
// list.children[3].children[0].id = 'test-link'; //adding ID
// val = list.children[3].children[0];

// // First child
// val = list.firstChild;
// val = list.firstElementChild; //*imp

// // Last Child
// val = list.lastChild;
// val = list.lastElementChild; //*imp

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling; //*Imp
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; //*Imp

// // Get next sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling; //*Imp

// console.log(val);
