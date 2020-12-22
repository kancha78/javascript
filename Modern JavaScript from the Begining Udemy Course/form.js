const form = document.querySelector('form');
const taskInput = document.getElementById('task');

form.addEventListener('submit', runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  console.log(tasktInput.value);

  e.preventDefault();
}
