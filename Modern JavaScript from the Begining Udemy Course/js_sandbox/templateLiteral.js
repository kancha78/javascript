// *********** Template Literal / Template string

const name = 'Kamran';
const age = 35;
const job = 'Web Developer';
const city = 'Miami';
let html;

function hello() {
  return 'Hello';
}

// Template Literal Helping Dynamically insert HTML
html = `<ul>
<li>Name: ${name} </li>
<li>Age: ${age} </li>
<li>Job: ${job} </li>
<li>City: ${city} </li>
<li>${2 + 2}</li>
<li>${hello()} </li>
<li>${age > 30 ? 'Over 30' : 'Under 30'} </li>
</Ul>`;

document.body.innerHTML = html;

<li></li>
<li></li>
<li></li>
<li></li>
<li></li>