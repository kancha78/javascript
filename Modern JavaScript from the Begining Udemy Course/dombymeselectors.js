// // ********* DOM SELECTORS   == $0 will help to select same position in webpage.
// // document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get Things from the Element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// //// **** Best way to assign first as below.

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// // Change Content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';

// // innerHTML
// // taskTitle.innerHTML = '<span style="color:red"> Task List</span>';

// console.log(document.querySelector('#task-title'));
// console.log((document.querySelector('#task-title').style.background = 'red'));

// // selecting by Element/Node
// console.log(document.querySelector('h5'));

// // List items
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'green';

// // Selecting Child Elements through Pcydo section
// document.querySelector('li:last-child').style.color = 'red';

// // Selecting 3rd Child Elements through Pcydo section
// document.querySelector('li:nth-child(3)').style.color = 'blue';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// // selecting only one. even or odd
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f1f1f1';
