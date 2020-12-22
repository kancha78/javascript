// https://youtu.be/INPob8yPyBo?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv&t=48

'use strict';

let name = 'Ayaan'

function makeUppercase(word){
  return word.toUpperCase();
}

let template = `<h2>${makeUppercase('Hello')}, ${name}</h2>. This text through Template Literal 
new in ES6 <h3>by ${name}</h3>`;

console.log(template);
document.getElementById('template').innerHTML = template;
