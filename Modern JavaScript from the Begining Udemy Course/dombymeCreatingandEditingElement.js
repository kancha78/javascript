// // // ********* DOM SELECTORS   == $0 will help to select same position in
// // Creating and Adding Element in the DOM

// Creat element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Creat new link element

const link = document.createElement('a');
// Add Class
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// append link to li
li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
