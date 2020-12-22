// Factories
// Factory Function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);

// Constructor Function
// First letter must be capital for Constructor

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const another = new Circle(1);
