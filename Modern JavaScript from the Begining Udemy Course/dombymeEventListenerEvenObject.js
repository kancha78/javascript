// // // ********* DOM SELECTORS   == $0 will help to select same position in
// // EVENT LISTENER EVENT OBJECT

// Event Listener

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  //   console.log('Clicked');

  let val;

  val = e;

  console.log(val);

  // Event Targent Element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;
}
